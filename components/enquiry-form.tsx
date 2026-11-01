"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useActionState, useEffect, type ReactNode } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { initialEnquiryState, type EnquiryField, type EnquiryState } from "@/lib/enquiry";
import { useDohaToday } from "@/lib/use-doha-today";
import { WhatsappIcon } from "@/components/whatsapp-icon";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: EnquiryField;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-extrabold tracking-[0.1em] text-brand uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#b3261e]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function fieldProps(id: EnquiryField, state: EnquiryState) {
  const error = state.errors?.[id];
  return {
    id,
    name: id,
    defaultValue: state.values?.[id],
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: "field",
  };
}

function ServiceAndDateFields({
  services,
  state,
  service,
  date,
}: {
  services: string[];
  state: EnquiryState;
  service?: string;
  date?: string;
}) {
  const today = useDohaToday();

  return (
    <>
      <Field id="service" label="Service" error={state.errors?.service}>
        <select
          {...fieldProps("service", state)}
          defaultValue={state.values?.service ?? service ?? services[0]}
          required
        >
          {services.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </Field>
      <Field id="date" label="Preferred meeting date" error={state.errors?.date}>
        <input
          {...fieldProps("date", state)}
          type="date"
          defaultValue={state.values?.date ?? date}
          min={today ?? undefined}
        />
      </Field>
    </>
  );
}

// `?service=` and `?date=` links land here with those choices filled in.
function PrefilledFields({ services, state }: { services: string[]; state: EnquiryState }) {
  const params = useSearchParams();
  const service = params.get("service") ?? undefined;
  const date = params.get("date") ?? undefined;

  return (
    <ServiceAndDateFields
      services={services}
      state={state}
      service={service && services.includes(service) ? service : undefined}
      date={date && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined}
    />
  );
}

export function EnquiryForm({ services }: { services: string[] }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialEnquiryState);

  // Same tab: browsers block new tabs opened after the await on the server.
  useEffect(() => {
    if (state.whatsappUrl) window.location.assign(state.whatsappUrl);
  }, [state.whatsappUrl]);

  if (state.status === "ready") {
    return (
      <div role="status" className="mt-6 rounded border border-line bg-white p-6">
        <span className="grid size-10 place-items-center rounded-full bg-brand text-white">
          <WhatsappIcon className="size-5" />
        </span>
        <p className="mt-4 font-display text-2xl text-brand">Opening WhatsApp</p>
        <p className="mt-2 text-body">
          Your details are filled in. Press send in WhatsApp so your enquiry reaches us.
        </p>
        <a href={state.whatsappUrl} className="btn btn-brand mt-4">
          <WhatsappIcon className="size-4.5" />
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form key={state.attempt} action={formAction} className="mt-5 grid gap-4 sm:grid-cols-2">
      {state.status === "invalid" ? (
        <p role="alert" className="text-sm font-semibold text-[#b3261e] sm:col-span-2">
          Please check the highlighted fields below.
        </p>
      ) : null}

      <Field id="name" label="Full name" error={state.errors?.name}>
        <input
          {...fieldProps("name", state)}
          required
          autoComplete="name"
          placeholder="Your name"
        />
      </Field>
      <Field id="company" label="Company" error={state.errors?.company}>
        <input {...fieldProps("company", state)} autoComplete="organization" placeholder="Optional" />
      </Field>
      <Field id="phone" label="Phone" error={state.errors?.phone}>
        <input
          {...fieldProps("phone", state)}
          type="tel"
          required
          autoComplete="tel"
          placeholder="+974"
        />
      </Field>
      <Field id="email" label="Email" error={state.errors?.email}>
        <input
          {...fieldProps("email", state)}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
      </Field>

      <Suspense fallback={<ServiceAndDateFields services={services} state={state} />}>
        <PrefilledFields services={services} state={state} />
      </Suspense>

      <div className="sm:col-span-2">
        <Field id="message" label="Message" error={state.errors?.message}>
          <textarea
            {...fieldProps("message", state)}
            required
            rows={4}
            placeholder="Tell us about your business activity, number of partners, and anything you already have in place."
          />
        </Field>
      </div>

      {/* Honeypot, hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={pending} className="btn btn-brand disabled:opacity-70">
          <WhatsappIcon className="size-5" />
          {pending ? "Opening WhatsApp..." : "Send enquiry on WhatsApp"}
        </button>
      </div>
    </form>
  );
}
