"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Button from "@/components/Button";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  teamSize: string;
  website: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  businessType: "",
  teamSize: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HeroLeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.businessType.trim()) nextErrors.businessType = "Select a business type.";
    if (!form.teamSize.trim()) nextErrors.teamSize = "Select a team size.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiError(null);
    setSuccess(false);

    if (!validate()) return;

    setSubmitting(true);

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
        message: `Homepage lead form. Company: ${form.company}. Team size: ${form.teamSize}. Nature of business: ${form.businessType}.`,
        meta: {
          userAgent: navigator.userAgent,
          referrer: document.referrer || undefined,
          utm: Object.keys(utm).length > 0 ? utm : undefined,
          phone: form.phone || undefined,
          teamSize: form.teamSize,
          serviceType: form.businessType,
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
        | { ok: boolean; error?: string; code?: string; detail?: string }
        | null;

      if (!response.ok || !data?.ok) {
        const errorMessage = data?.error ?? "Something went wrong. Please try again.";
        setApiError(errorMessage);
        return;
      }

      setSuccess(true);
      window.location.href = `https://app.bizosto.com/signup?email=${encodeURIComponent(form.email)}&company=${encodeURIComponent(form.company)}&name=${encodeURIComponent(form.fullName)}`;
      setForm(initialState);
    } catch (error) {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="space-y-4">
      {success ? (
        <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
          Thanks — we received your request. We’ll reply within 1 business day.
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
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            {errors.fullName ? (
              <p className="text-xs text-primary">{errors.fullName}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="email">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
            {errors.email ? <p className="text-xs text-primary">{errors.email}</p> : null}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="company">
              Company name
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name"
              required
            />
            {errors.company ? <p className="text-xs text-primary">{errors.company}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              required
            />
            {errors.phone ? <p className="text-xs text-primary">{errors.phone}</p> : null}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="businessType">
              Nature of business
            </label>
            <select
              id="businessType"
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Select business type</option>
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
            </select>
            {errors.businessType ? (
              <p className="text-xs text-primary">{errors.businessType}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="teamSize">
              Team size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              required
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51-75">51-75</option>
              <option value="76-100">76-100</option>
            </select>
            {errors.teamSize ? <p className="text-xs text-primary">{errors.teamSize}</p> : null}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit" disabled={submitting} className="w-full" variant="primary">
            {submitting ? "Submitting..." : "Start Free Trial →"}
          </Button>
          <p className="text-xs text-muted-foreground">
            You'll be taken to create your account. No credit card required.
          </p>
        </div>
      </form>
    </div>
  );
}
