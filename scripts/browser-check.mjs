import { writeFileSync } from "node:fs";

const debugPort = process.env.CHROME_DEBUG_PORT || "9223";
const targetUrl = `http://127.0.0.1:${debugPort}/json`;

async function waitForTarget() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const targets = await fetch(targetUrl).then((response) => response.json());
      const page = targets.find((target) => target.type === "page");
      if (page) return page;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Không kết nối được Chrome DevTools Protocol.");
}

const target = await waitForTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
const consoleErrors = [];
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") {
    consoleErrors.push(message.params.exceptionDetails.text);
  }
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") {
    consoleErrors.push(message.params.args.map((item) => item.value ?? item.description).join(" "));
  }
});

function send(method, params = {}) {
  commandId += 1;
  const id = commandId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

function waitForEvent(method) {
  return new Promise((resolve) => {
    const listener = (event) => {
      const message = JSON.parse(event.data);
      if (message.method === method) {
        socket.removeEventListener("message", listener);
        resolve(message.params);
      }
    };
    socket.addEventListener("message", listener);
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await send("Page.enable");
await send("Runtime.enable");

const viewports = [
  { name: "mobile", width: 390, height: 844, mobile: true },
  { name: "tablet", width: 768, height: 1024, mobile: false },
  { name: "desktop", width: 1440, height: 1000, mobile: false },
];
const results = [];

for (const viewport of viewports) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile,
  });
  const loaded = waitForEvent("Page.loadEventFired");
  await send("Page.navigate", { url: "http://localhost:3000/" });
  await loaded;
  await evaluate("document.fonts.ready.then(() => true)");
  const metrics = await evaluate(`(() => ({
    innerWidth: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    h1: document.querySelector('h1')?.textContent,
    menuVisible: getComputedStyle(document.querySelector('.mobile-nav')).display !== 'none',
    activeElement: document.activeElement?.outerHTML?.slice(0, 80),
    skipTransform: getComputedStyle(document.querySelector('.skip-link')).transform
  }))()`);
  const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  writeFileSync(new URL(`../docs/screenshot-${viewport.name}.png`, import.meta.url), Buffer.from(screenshot.data, "base64"));
  results.push({ viewport: viewport.name, ...metrics, noHorizontalOverflow: metrics.scrollWidth <= metrics.clientWidth });
}

await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
let loaded = waitForEvent("Page.loadEventFired");
await send("Page.navigate", { url: "http://localhost:3000/" });
await loaded;
await evaluate("document.querySelector('.menu-button').click()");
const mobileMenu = await evaluate(`(() => ({
  open: document.querySelector('.mobile-nav').open,
  display: getComputedStyle(document.querySelector('#primary-navigation')).display
}))()`);

loaded = waitForEvent("Page.loadEventFired");
await send("Page.navigate", { url: "http://localhost:3000/san-pham/sony-wh-1000xm6" });
await loaded;
await evaluate("document.querySelector('.faq-item summary').focus()");
const focusedElement = await evaluate("document.activeElement?.tagName");
await send("Input.dispatchKeyEvent", { type: "rawKeyDown", key: " ", code: "Space", windowsVirtualKeyCode: 32 });
await send("Input.dispatchKeyEvent", { type: "keyUp", key: " ", code: "Space", windowsVirtualKeyCode: 32 });
const faqKeyboard = await evaluate("document.querySelector('.faq-item').open");

console.log(JSON.stringify({ viewports: results, mobileMenu, focusedElement, faqKeyboard, consoleErrors }, null, 2));
socket.close();
