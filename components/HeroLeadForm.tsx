"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import RecaptchaScript from "@/components/RecaptchaScript";
import {
  clearSubmissionId,
  createRecaptchaToken,
  getSanitizedReferrer,
  getOrCreateSubmissionId,
} from "@/lib/recaptcha-client";
import {
  selfServiceSignupEnabled,
  signupCtaLabel,
  signupHref,
} from "@/lib/launch-stage";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  consent: boolean;
  teamSize: string;
  website: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  businessType: "",
  consent: false,
  teamSize: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HeroLeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const submissionIdRef = useRef("");

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company name is required.";
    if (!form.teamSize.trim()) nextErrors.teamSize = "Select a team size.";
    if (!form.consent) nextErrors.consent = "Please confirm we may contact you.";

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
      const recaptchaToken = await createRecaptchaToken();
      if (!submissionIdRef.current) submissionIdRef.current = getOrCreateSubmissionId("homepage");

      const query = new URLSearchParams(window.location.search);
      const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].reduce<
        Record<string, string>
      >((values, key) => {
        const value = query.get(key)?.trim();
        if (value) values[key] = value.slice(0, 200);
        return values;
      }, {});

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.company,
          consent: form.consent,
          email: form.email,
          message: `Homepage ${selfServiceSignupEnabled ? "trial" : "beta access"} request. Team size: ${form.teamSize}. Business type: ${form.businessType || "not specified"}.`,
          meta: {
            phone: form.phone || null,
            referrer: getSanitizedReferrer(),
            serviceType: form.businessType || null,
            teamSize: form.teamSize,
            utm: Object.keys(utm).length ? utm : null,
          },
          name: form.fullName,
          page: window.location.pathname,
          recaptchaToken,
          source: "bizosto-website",
          submissionId: submissionIdRef.current,
          website: form.website,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok || data?.ok !== true) {
        setApiError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setForm(initialState);
      clearSubmissionId("homepage");
      submissionIdRef.current = "";
      // Do not put names, companies, or email addresses into browser history or access logs.
      if (selfServiceSignupEnabled) window.location.assign(signupHref());
    } catch {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.currentTarget;
    const { name } = target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };

  return (
    <div className="space-y-4">
      {success ? (
        <div
          className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          {selfServiceSignupEnabled
            ? "Thanks — your request was received. Taking you to secure signup…"
            : "Thanks — your beta access request was received. Our team will follow up about next steps."}
        </div>
      ) : null}
      {apiError ? (
        <div
          className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
          role="alert"
        >
          {apiError}
        </div>
      ) : null}
      <form className="grid gap-4" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="hero-website">Website</label>
          <input
            id="hero-website"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-fullName">
              Full name
            </label>
            <input
              id="hero-fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              maxLength={120}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "hero-fullName-error" : undefined}
              required
            />
            {errors.fullName ? <p id="hero-fullName-error" className="text-xs text-primary">{errors.fullName}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-email">
              Work email
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              autoComplete="email"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "hero-email-error" : undefined}
              required
            />
            {errors.email ? <p id="hero-email-error" className="text-xs text-primary">{errors.email}</p> : null}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-company">
              Company name
            </label>
            <input
              id="hero-company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name"
              autoComplete="organization"
              maxLength={160}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "hero-company-error" : undefined}
              required
            />
            {errors.company ? <p id="hero-company-error" className="text-xs text-primary">{errors.company}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-phone">
              Phone <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id="hero-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 212 555 0100"
              autoComplete="tel"
              maxLength={40}
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-businessType">
              Nature of business <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <select
              id="hero-businessType"
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
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
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="hero-teamSize">
              Team size
            </label>
            <select
              id="hero-teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              aria-invalid={Boolean(errors.teamSize)}
              aria-describedby={errors.teamSize ? "hero-teamSize-error" : undefined}
              required
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51-100">51-100</option>
              <option value="101+">101+</option>
            </select>
            {errors.teamSize ? <p id="hero-teamSize-error" className="text-xs text-primary">{errors.teamSize}</p> : null}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <input
            id="hero-consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 shrink-0"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "hero-consent-error" : undefined}
            required
          />
          <div>
            <label htmlFor="hero-consent" className="text-xs leading-relaxed text-muted-foreground">
              I agree that Bizosto may contact me about this request and acknowledge the{" "}
              <a className="underline underline-offset-2 hover:text-foreground" href="/privacy">
                Privacy Policy
              </a>
              .
            </label>
            {errors.consent ? <p id="hero-consent-error" className="mt-1 text-xs text-primary">{errors.consent}</p> : null}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit" disabled={submitting} className="w-full" variant="primary">
            {submitting ? "Submitting…" : `${signupCtaLabel} →`}
          </Button>
          <p className="text-xs text-muted-foreground">
            {selfServiceSignupEnabled
              ? "Card required. No charge during the 14-day trial; cancel before day 15 and pay nothing."
              : "Controlled-beta access is reviewed before activation. Invited workspaces receive a 14-day trial; card required, with no charge before day 15 if cancelled during the trial."}
          </p>
        </div>
      </form>
      <RecaptchaScript />
    </div>
  );
}
