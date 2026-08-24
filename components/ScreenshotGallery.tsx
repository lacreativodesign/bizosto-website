"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import ImageModal, { type ScreenshotItem } from "@/components/ImageModal";

const items: ScreenshotItem[] = [
  {
    src: "/screenshots/erp-admin-dark.png",
    title: "Operations Command",
    description: "Dark-mode executive overview for delivery leaders.",
  },
  {
    src: "/screenshots/erp-admin-operations.png",
    title: "Delivery Control",
    description: "Workflows, approvals, and timelines in one surface.",
  },
  {
    src: "/screenshots/erp-admin-finance.png",
    title: "Finance Intelligence",
    description: "Billing, retainers, and margin visibility tied to delivery.",
  },
  {
    src: "/screenshots/erp-admin-pipeline.png",
    title: "Pipeline View",
    description: "Lead status tracking with automation-ready data.",
  },
];

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [missing, setMissing] = useState<Record<string, boolean>>({});

  const handleOpen = useCallback((index: number) => setActiveIndex(index), []);
  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handleNext = useCallback(
    () => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % items.length)),
    []
  );
  const handlePrev = useCallback(
    () =>
      setActiveIndex((prev) =>
        prev === null ? null : (prev - 1 + items.length) % items.length
      ),
    []
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="tilt-hover group relative rounded-2xl border border-border bg-surface p-4 text-left hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            onClick={() => handleOpen(index)}
            aria-haspopup="dialog"
            aria-label={`Open ${item.title} product preview`}
          >
            <div className="flex min-h-[240px] items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
              {missing[item.src] ? (
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">Screenshot placeholder</p>
                  <p className="text-xs text-muted-foreground">{item.src}</p>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1351}
                  height={768}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full max-h-56 w-full rounded-lg object-contain"
                  onError={() => setMissing((prev) => ({ ...prev, [item.src]: true }))}
                />
              )}
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-background/0 text-sm font-semibold text-foreground opacity-0 transition group-hover:bg-background/70 group-hover:opacity-100 group-focus-visible:bg-background/70 group-focus-visible:opacity-100">
              Open preview
            </div>
          </button>
        ))}
      </div>
      {activeIndex !== null ? (
        <ImageModal
          items={items}
          activeIndex={activeIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          missingMap={missing}
        />
      ) : null}
    </div>
  );
}
