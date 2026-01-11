"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Card key={item.question} className="p-0">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="text-base font-semibold text-foreground">{item.question}</span>
              <span
                className={cn(
                  "text-sm font-semibold text-muted-foreground transition",
                  isOpen ? "rotate-45" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm text-muted-foreground">{item.answer}</div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
