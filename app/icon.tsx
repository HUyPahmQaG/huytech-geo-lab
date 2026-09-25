import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #0b72e7 0%, #0c3c92 100%)",
          borderRadius: 112,
          color: "white",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 320,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: -24,
          lineHeight: 1,
          position: "relative",
          width: "100%",
        }}
      >
        <span style={{ transform: "translateX(-6px)" }}>H</span>
        <span
          style={{
            background: "#31d0aa",
            borderRadius: 999,
            height: 72,
            position: "absolute",
            right: 54,
            top: 54,
            width: 72,
          }}
        />
      </div>
    ),
    size,
  );
}
