export const enquiryFields = [
  "name",
  "company",
  "phone",
  "email",
  "service",
  "date",
  "message",
] as const;

export type EnquiryField = (typeof enquiryFields)[number];

export type EnquiryValues = Record<EnquiryField, string>;

export type EnquiryState = {
  status: "idle" | "invalid" | "ready";
  // Remounts the form after each attempt so it keeps what the visitor typed.
  attempt: number;
  values?: EnquiryValues;
  errors?: Partial<Record<EnquiryField, string>>;
  whatsappUrl?: string;
};

export const initialEnquiryState: EnquiryState = { status: "idle", attempt: 0 };
