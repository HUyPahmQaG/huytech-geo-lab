export function StatusPill({ status }: { status: "Đã triển khai" | "Đã kiểm tra" | "Cần kiểm tra thủ công" }) {
  const className = status === "Đã kiểm tra" ? "checked" : status === "Đã triển khai" ? "done" : "manual";
  return <span className={`status-pill ${className}`}>{status}</span>;
}
