"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import RecaptchaScript from "@/components/RecaptchaScript";
import {
  clearSubmissionId,
  createRecaptchaToken,
  getSanitizedReferrer,
  getOrCreateSubmissionId,
} from "@/lib/recaptcha-client";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  consent: boolean;
  teamSize: string;
  serviceType: string;
  message: string;
  website: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  consent: false,
  teamSize: "",
  serviceType: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const submissionIdRef = useRef("");

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company is required.";
    if (!form.teamSize.trim()) nextErrors.teamSize = "Select a team size.";
    if (!form.serviceType.trim()) nextErrors.serviceType = "Select a business type.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    if (!form.consent) nextErrors.consent = "Please confirm we may contact you.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiError(null);
    setShowSuccess(false);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const recaptchaToken = await createRecaptchaToken();
      const formKey = window.location.pathname;
      if (!submissionIdRef.current) submissionIdRef.current = getOrCreateSubmissionId(formKey);

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
          message: form.message,
          meta: {
            phone: form.phone || null,
            referrer: getSanitizedReferrer(),
            serviceType: form.serviceType,
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
        setApiError(data?.error ?? "Unable to submit right now. Please try again.");
        return;
      }

      setShowSuccess(true);
      setForm(initialState);
      clearSubmissionId(formKey);
      submissionIdRef.current = "";
    } catch {
      setApiError("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      {showSuccess ? (
        <div
          className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          Thanks for reaching out. Our team will follow up about your request.
        </div>
      ) : null}
      {apiError ? (
        <div
          className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
          role="alert"
        >
          {apiError}
        </div>
      ) : null}
      <Card>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
          <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-fullName">
              Your name
            </label>
            <input
              id="contact-fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Who should we address?"
              autoComplete="name"
              maxLength={120}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "contact-fullName-error" : undefined}
              required
            />
            {errors.fullName ? <p id="contact-fullName-error" className="text-xs text-primary">{errors.fullName}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-email">
              Work email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@yourcompany.com"
              autoComplete="email"
              maxLength={254}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              required
            />
            {errors.email ? <p id="contact-email-error" className="text-xs text-primary">{errors.email}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-phone">
              Best phone for scheduling <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 212 555 0100"
              autoComplete="tel"
              maxLength={40}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-company">
              Company or agency name
            </label>
            <input
              id="contact-company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company"
              autoComplete="organization"
              maxLength={160}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "contact-company-error" : undefined}
              required
            />
            {errors.company ? <p id="contact-company-error" className="text-xs text-primary">{errors.company}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-teamSize">
              Team size to support
            </label>
            <select
              id="contact-teamSize"
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              aria-invalid={Boolean(errors.teamSize)}
              aria-describedby={errors.teamSize ? "contact-teamSize-error" : undefined}
              required
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51-100">51-100</option>
              <option value="101+">101+</option>
            </select>
            {errors.teamSize ? <p id="contact-teamSize-error" className="text-xs text-primary">{errors.teamSize}</p> : null}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-serviceType">
              Business model
            </label>
            <select
              id="contact-serviceType"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.serviceType)}
              aria-describedby={errors.serviceType ? "contact-serviceType-error" : undefined}
              required
            >
              <option value="">Select business model</option>
              <option value="agency">Agency</option>
              <option value="service-provider">Service provider</option>
              <option value="internal-ops">Internal operations team</option>
              <option value="consultancy">Consultancy</option>
              <option value="other">Other</option>
            </select>
            {errors.serviceType ? <p id="contact-serviceType-error" className="text-xs text-primary">{errors.serviceType}</p> : null}
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="contact-message">
              Workflow goals for the demo
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              maxLength={4_000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              placeholder="Share the workflows, clients, or approvals you want to see."
              required
            />
            {errors.message ? <p id="contact-message-error" className="text-xs text-primary">{errors.message}</p> : null}
          </div>
          <div className="flex items-start gap-3 md:col-span-2">
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 shrink-0"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "contact-consent-error" : undefined}
              required
            />
            <div>
              <label htmlFor="contact-consent" className="text-xs leading-relaxed text-muted-foreground">
                I agree that Bizosto may contact me about this request and acknowledge the{" "}
                <a className="underline underline-offset-2 hover:text-foreground" href="/privacy">
                  Privacy Policy
                </a>
                .
              </label>
              {errors.consent ? <p id="contact-consent-error" className="mt-1 text-xs text-primary">{errors.consent}</p> : null}
            </div>
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full" variant="primary" disabled={submitting}>
              {submitting ? "Submitting…" : "Request My Demo"}
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              We use these details only to respond to your request.
            </p>
          </div>
        </form>
      </Card>
      <RecaptchaScript />
    </div>
  );
}
