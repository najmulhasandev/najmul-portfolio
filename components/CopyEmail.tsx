"use client";

import { useRef, useState } from "react";
import { Copy } from "./Icons";

export default function CopyEmail({ email }: { email: string }) {
  const [note, setNote] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      ok = false;
    }
    setNote(ok ? "Email address copied." : "Copy failed. Select the address above instead.");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setNote(""), 2600);
  }

  return (
    <span className="copy-wrap">
      <button type="button" className="btn" onClick={copy}>
        <Copy /> Copy email
      </button>
      <span className="sr-only" role="status" aria-live="polite">{note}</span>
      <span className="copy-note" aria-hidden="true">{note}</span>
    </span>
  );
}
