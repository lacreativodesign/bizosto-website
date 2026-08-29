"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import ImageModal, { type ScreenshotItem } from "@/components/ImageModal";
import { cn } from "@/lib/utils";

const items: ScreenshotItem[] = [
  {
    src: "/screenshots/erp-admin-dark.png",
    title: "Operations Command",
    description: "Executive visibility across the work that moves your business.",
  },
  {
    src: "/screenshots/erp-admin-operations.png",
    title: "Delivery Control",
    description: "Workflows, approvals, and timelines in one surface.",
  },
  {
    src: "/screenshots/erp-admin-finance.png",
    title: "Finance Intelligence",
    description: "Billing and margin visibility tied directly to delivery.",
  },
  {
    src: "/screenshots/erp-admin-pipeline.png",
    title: "Pipeline View",
    description: "Every lead, next step, and handoff clearly visible.",
  },
];

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [missing, setMissing] = useState<Record<string, boolean>>({});

  const handleNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % items.length);
  }, []);
  const handlePrev = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + items.length) % items.length);
  }, []);
  const handleClose = useCallback(() => setActiveIndex(null), []);

  return (
    <div className="space-y-6">
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={cn(
              "product-gallery-card surface-card group relative overflow-hidden rounded-[1.6rem] border border-border p-3 text-left",
              index === 0 && "lg:col-span-3"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.title} product screenshot`}
          >
            <div className={cn("relative overflow-hidden rounded-[1.15rem] bg-[#071225]", index === 0 ? "aspect-[16/8.3]" : "aspect-[4/3]") }>
              {missing[item.src] ? (
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <p className="text-sm font-semibold text-white">Product preview unavailable</p>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 1024px) 100vw, 33vw"}
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.015]"
                  onError={() => setMissing((current) => ({ ...current, [item.src]: true }))}
                />
              )}
              <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#071225]/70 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-4">
              <div>
                <p className="text-sm font-bold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
              <span className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">View</span>
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
