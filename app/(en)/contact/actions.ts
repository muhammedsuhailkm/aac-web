"use server";

import { dohaToday, isFriday } from "@/lib/doha-date";
import {
  enquiryFields,
  type EnquiryField,
  type EnquiryState,
  type EnquiryValues,
} from "@/lib/enquiry";
import { serviceOptions } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

const maxLengths: Record<EnquiryField, number> = {
  name: 120,
  company: 160,
  phone: 30,
  email: 200,
  service: 80,
  date: 10,
  message: 4000,
};

function readValues(formData: FormData) {
  const values = {} as EnquiryValues;
  for (const field of enquiryFields) {
    const value = formData.get(field);
    values[field] =
      typeof value === "string" ? value.trim().slice(0, maxLengths[field]) : "";
  }
  return values;
}

function validate(values: EnquiryValues) {
  const errors: EnquiryState["errors"] = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a phone number we can reach you on.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!serviceOptions.includes(values.service)) {
    errors.service = "Please choose a service.";
  }
  if (!values.message) errors.message = "Please tell us a little about what you need.";

  if (values.date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date) || values.date < dohaToday()) {
      errors.date = "Please choose a date from today onwards.";
    } else if (isFriday(values.date)) {
      errors.date = "We're closed on Fridays. Please choose another day.";
    }
  }

  return errors;
}

function summarise(values: EnquiryValues) {
  return [
    `Name: ${values.name}`,
    `Company: ${values.company || "-"}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    `Preferred meeting date: ${values.date || "-"}`,
    "",
    values.message,
  ].join("\n");
}

export async function submitEnquiry(
  previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const attempt = previous.attempt + 1;

  // Honeypot: people never see this field, so a value means a bot. Report
  // success so it doesn't learn anything.
  if (formData.get("website")) return { status: "ready", attempt, whatsappUrl: whatsappUrl() };

  const values = readValues(formData);
  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", attempt, values, errors };
  }

  return {
    status: "ready",
    attempt,
    whatsappUrl: whatsappUrl(`Hello Al Aflah, I'd like to enquire.\n\n${summarise(values)}`),
  };
}
