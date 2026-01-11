"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

interface ImageModalProps {
  isOpen: boolean;
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageModal({
  isOpen,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const image = images[activeIndex];

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-label="Screenshot modal"
        >
          <motion.div
            className="relative w-full max-w-5xl rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-card)]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{image.label}</p>
                <p className="text-xs text-muted-foreground">Product preview</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground"
                onClick={onClose}
                aria-label="Close screenshot modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                className="hidden rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground md:inline-flex"
                onClick={onPrev}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface-muted">
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                  fallbackClassName="rounded-xl"
                />
              </div>
              <button
                type="button"
                className="hidden rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground md:inline-flex"
                onClick={onNext}
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground transition hover:border-primary/50 md:hidden"
                )}
                onClick={onPrev}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-3 w-3" />
                Prev
              </button>
              <span>
                {activeIndex + 1} of {images.length}
              </span>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground transition hover:border-primary/50 md:hidden"
                )}
                onClick={onNext}
                aria-label="Next screenshot"
              >
                Next
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
