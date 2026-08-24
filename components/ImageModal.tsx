"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ScreenshotItem {
  src: string;
  title: string;
  description: string;
}

interface ImageModalProps {
  items: ScreenshotItem[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  missingMap?: Record<string, boolean>;
}

const EMPTY_MISSING_MAP: Record<string, boolean> = {};

export default function ImageModal({
  items,
  activeIndex,
  onClose,
  onNext,
  onPrev,
  missingMap = EMPTY_MISSING_MAP,
}: ImageModalProps) {
  const [missing, setMissing] = useState<Record<string, boolean>>(missingMap);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "Tab") {
        const controls = panelRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];
  const itemIsMissing = Boolean(missing[item.src] || missingMap[item.src]);

  return (
    <div
      className="modal-fade fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-6 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-preview-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="modal-panel relative w-full max-w-5xl rounded-2xl border border-border bg-surface p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 id="product-preview-title" className="text-xl font-semibold text-foreground">
              {item.title}
            </h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          <button
            type="button"
            ref={closeButtonRef}
            className="rounded-full border border-border bg-surface-muted px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center rounded-2xl border border-border bg-surface-muted p-6">
          {itemIsMissing ? (
            <div className="flex h-72 w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface">
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">Screenshot placeholder</p>
                <p className="text-xs text-muted-foreground">{item.src}</p>
              </div>
            </div>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              width={1351}
              height={768}
              sizes="90vw"
              className={cn("max-h-[70vh] w-full rounded-xl object-contain")}
              onError={() => setMissing((prev) => ({ ...prev, [item.src]: true }))}
            />
          )}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            className="rounded-md border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50"
            onClick={onPrev}
          >
            Previous
          </button>
          <p className="text-xs text-muted-foreground">
            {activeIndex + 1} of {items.length}
          </p>
          <button
            type="button"
            className="rounded-md border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
