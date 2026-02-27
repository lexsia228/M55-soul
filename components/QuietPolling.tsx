"use client";
import { useEffect, useState } from "react";
export function QuietPolling({ max = 8, intervalMs = 3000 }: { max?: number; intervalMs?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= max) return;
    const t = setTimeout(() => {
      setCount((c) => c + 1);
      window.location.reload();
    }, intervalMs);
    return () => clearTimeout(t);
  }, [count, max, intervalMs]);

  return (
    <div style={{ marginTop: 16, fontSize: 12, opacity: 0.75 }}>
      {count < max ? (
        <p>決済の反映を確認しています…</p>
      ) : (
        <>
          <p>少し時間が必要な場合があります。</p>
          <p style={{ marginTop: 8 }}>
            <a href="/dtr/core" style={{ textDecoration: "underline" }}>本編を開いて確認する</a>
          </p>
        </>
      )}
    </div>
  );
}
