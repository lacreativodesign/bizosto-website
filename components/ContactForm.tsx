"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  serviceType: string;
  message: string;
  website: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  teamSize: "",
  serviceType: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company is required.";
    if (!form.teamSize.trim()) nextErrors.teamSize = "Select a team size.";
    if (!form.serviceType.trim()) nextErrors.serviceType = "Select a service type.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError(null);

    try {
      const utmParams = new URLSearchParams(window.location.search);
      const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].reduce<
        Record<string, string>
      >((acc, key) => {
        const value = utmParams.get(key);
        if (value) acc[key] = value;
        return acc;
      }, {});

      const payload = {
        source: "bizosto-website",
        page: window.location.pathname,
        name: form.fullName,
        email: form.email,
        company: form.company,
        message: form.message,
        meta: {
          userAgent: navigator.userAgent,
          referrer: document.referrer || undefined,
          utm: Object.keys(utm).length > 0 ? utm : undefined,
          phone: form.phone || undefined,
          teamSize: form.teamSize || undefined,
          serviceType: form.serviceType || undefined,
        },
        website: form.website,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setApiError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setShowToast(true);
      setForm(initialState);
      window.setTimeout(() => setShowToast(false), 3000);
    } catch {
      setApiError("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      {showToast ? (
        <div className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
          Thanks for reaching out. We will get back to you shortly.
        </div>
      ) : null}
      {apiError ? (
        <div className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
          {apiError}
        </div>
      ) : null}
      <Card>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="fullName">
              Your name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
              placeholder="Who should we address?"
            />
            {errors.fullName ? <p className="text-xs text-primary">{errors.fullName}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="email">
              Work email for demo details
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
              placeholder="you@yourcompany.com"
            />
            {errors.email ? <p className="text-xs text-primary">{errors.email}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="phone">
              Best phone for scheduling (optional)
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="company">
              Company or agency name
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
              placeholder="Bizosto Partners"
            />
            {errors.company ? <p className="text-xs text-primary">{errors.company}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="teamSize">
              Team size to support
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51+">51+</option>
            </select>
            {errors.teamSize ? <p className="text-xs text-primary">{errors.teamSize}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="serviceType">
              Business model
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
            >
              <option value="">Select business model</option>
              <option value="agency">Agency</option>
              <option value="service-provider">Service provider</option>
              <option value="internal-ops">Internal operations team</option>
              <option value="consultancy">Consultancy</option>
              <option value="other">Other</option>
            </select>
            {errors.serviceType ? <p className="text-xs text-primary">{errors.serviceType}</p> : null}
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="message">
              Workflow goals for the demo
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
              placeholder="Share the workflows, clients, or approvals you want to see."
            />
            {errors.message ? <p className="text-xs text-primary">{errors.message}</p> : null}
          </div>
          <div className="md:col-span-2">
            <Button
              type="submit"
              className={`w-full ${submitting ? "opacity-60 pointer-events-none" : ""}`}
              variant="primary"
              aria-disabled={submitting}
            >
              {submitting ? "Submitting..." : "Request My Demo"}
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">We typically respond within 24 hours.</p>
          </div>
        </form>
      </Card>
    </div>
  );
}
