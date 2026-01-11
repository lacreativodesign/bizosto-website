"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  serviceType: string;
  website: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  teamSize: "",
  serviceType: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HeroLeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const utmParams = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].reduce<
      Record<string, string>
    >((acc, key) => {
      const value = params.get(key);
      if (value) acc[key] = value;
      return acc;
    }, {});
  }, []);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company is required.";
    if (!form.serviceType.trim()) nextErrors.serviceType = "Select a nature of business.";
    if (!form.teamSize.trim()) nextErrors.teamSize = "Select a team size.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setApiError(null);

    try {
      const payload = {
        source: "bizosto-website",
        page: window.location.pathname,
        name: form.fullName,
        email: form.email,
        company: form.company,
        message: `Homepage lead capture. ${form.serviceType} · Team size ${form.teamSize}.`,
        meta: {
          userAgent: navigator.userAgent,
          referrer: document.referrer || undefined,
          utm: Object.keys(utmParams).length > 0 ? utmParams : undefined,
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

      setSuccess(true);
      setForm(initialState);
      window.setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setApiError("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Schedule a Demo
        </p>
        <h3 className="text-2xl font-semibold text-foreground">See Bizosto ERP in action</h3>
        <p className="text-sm text-muted-foreground">
          Share a few details and our team will reach out with a tailored walkthrough.
        </p>
      </div>
      {success ? (
        <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
          Thanks! We will follow up shortly with next steps.
        </div>
      ) : null}
      {apiError ? (
        <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
          {apiError}
        </div>
      ) : null}
      <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
        <div
          className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
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
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="fullName">
              Full name
            </label>
            <Input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your name"
              hasError={Boolean(errors.fullName)}
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName ? <p className="text-xs text-primary">{errors.fullName}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="email">
              Work email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              hasError={Boolean(errors.email)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <p className="text-xs text-primary">{errors.email}</p> : null}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="phone">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="company">
              Company
            </label>
            <Input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Bizosto Partners"
              hasError={Boolean(errors.company)}
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company ? <p className="text-xs text-primary">{errors.company}</p> : null}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="serviceType">
              Nature of business
            </label>
            <Select
              id="serviceType"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              hasError={Boolean(errors.serviceType)}
              aria-invalid={Boolean(errors.serviceType)}
            >
              <option value="">Select nature of business</option>
              <option value="Digital Agency">Digital Agency</option>
              <option value="SaaS">SaaS</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Consulting">Consulting</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Legal">Legal</option>
              <option value="Logistics">Logistics</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </Select>
            {errors.serviceType ? (
              <p className="text-xs text-primary">{errors.serviceType}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="teamSize">
              Team size
            </label>
            <Select
              id="teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              hasError={Boolean(errors.teamSize)}
              aria-invalid={Boolean(errors.teamSize)}
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51-75">51-75</option>
              <option value="76-100">76-100</option>
            </Select>
            {errors.teamSize ? <p className="text-xs text-primary">{errors.teamSize}</p> : null}
          </div>
        </div>
        <div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Submitting..." : "Request a Demo"}
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            We respond within one business day with next steps.
          </p>
        </div>
      </form>
    </div>
  );
}
