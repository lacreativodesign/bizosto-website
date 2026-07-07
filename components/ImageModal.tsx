"use client";

import { useEffect, useState } from "react";
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

export default function ImageModal({
  items,
  activeIndex,
  onClose,
  onNext,
  onPrev,
  missingMap = {},
}: ImageModalProps) {
  const [missing, setMissing] = useState<Record<string, boolean>>(missingMap);

  useEffect(() => {
    setMissing(missingMap);
  }, [missingMap]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];

  return (
    <div
      className="modal-fade fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-6 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label="Product preview"
      onClick={onClose}
    >
      <div
        className="modal-panel relative w-full max-w-5xl rounded-2xl border border-border bg-surface p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">{item.title}</p>
            <h3 className="text-xl font-semibold text-foreground">{item.description}</h3>
          </div>
          <button
            type="button"
            className="rounded-full border border-border bg-surface-muted px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center rounded-2xl border border-border bg-surface-muted p-6">
          {missing[item.src] ? (
            <div className="flex h-72 w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface">
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">Screenshot placeholder</p>
                <p className="text-xs text-muted-foreground">{item.src}</p>
              </div>
            </div>
          ) : (
            <img
              src={item.src}
              alt={item.title}
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
