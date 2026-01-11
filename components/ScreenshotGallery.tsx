"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageModal, { GalleryImage } from "@/components/ImageModal";
import SmartImage from "@/components/SmartImage";
import { cn } from "@/lib/utils";

const defaultImages: GalleryImage[] = [
  {
    src: "/screenshots/erp-admin-dark.png",
    alt: "ERP admin dashboard in dark mode",
    label: "Executive dashboard",
  },
  {
    src: "/screenshots/erp-admin-operations.png",
    alt: "ERP operations view",
    label: "Operations command center",
  },
  {
    src: "/screenshots/erp-admin-finance.png",
    alt: "ERP finance module",
    label: "Finance control suite",
  },
  {
    src: "/screenshots/erp-admin-pipeline.png",
    alt: "ERP pipeline overview",
    label: "Pipeline & delivery",
  },
];

interface ScreenshotGalleryProps {
  images?: GalleryImage[];
}

export default function ScreenshotGallery({ images = defaultImages }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => setActiveIndex(null);

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-surface p-3 text-left shadow-[var(--shadow-card)] transition",
              "hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)]"
            )}
            onClick={() => handleOpen(index)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            aria-label={`Open screenshot ${image.label}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-muted">
              <SmartImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                fallbackClassName="rounded-xl"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100">
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">{image.label}</p>
                  <p className="text-xs text-white/80">Click to zoom</p>
                </div>
                <div className="m-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{image.label}</p>
                <p className="text-xs text-muted-foreground">Enterprise ERP UI</p>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                Preview
              </span>
            </div>
          </motion.button>
        ))}
      </div>
      <ImageModal
        isOpen={activeIndex !== null}
        images={images}
        activeIndex={activeIndex ?? 0}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
