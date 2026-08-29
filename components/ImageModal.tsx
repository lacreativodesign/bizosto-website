"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

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

export default function ImageModal({ items, activeIndex, onClose, onNext, onPrev, missingMap = {} }: ImageModalProps) {
  const [missing, setMissing] = useState<Record<string, boolean>>(missingMap);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];

  return (
    <div className="modal-fade fixed inset-0 z-50 flex items-center justify-center bg-[#020713]/92 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`${item.title} product preview`} onClick={onClose}>
      <div className="modal-panel relative w-full max-w-6xl rounded-[1.75rem] border border-white/10 bg-[#081326] p-4 shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 px-1 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Product preview</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
          </div>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/10" onClick={onClose} aria-label="Close product preview">
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#050c18]">
          {missing[item.src] ? (
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">Product preview unavailable</div>
          ) : (
            <Image src={item.src} alt={item.title} fill sizes="(max-width: 1280px) 100vw, 1152px" className="object-contain" onError={() => setMissing((current) => ({ ...current, [item.src]: true }))} priority />
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06]" onClick={onPrev}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
          </button>
          <p className="text-xs text-slate-500">{activeIndex + 1} of {items.length}</p>
          <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06]" onClick={onNext}>
            Next <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
