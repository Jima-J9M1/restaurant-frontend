"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  className?: string;
}

export default function Modal({ open, title, children, footer, onClose, className }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={[
            "w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl",
            className ?? "",
          ].join(" ")}
        >
          {title && (
            <h3 className="mb-4 text-center text-xl font-bold text-orange-500">{title}</h3>
          )}
          {children}
          {footer && <div className="mt-6 flex items-center justify-center gap-3">{footer}</div>}
        </div>
      </div>
    </div>
  );
}


