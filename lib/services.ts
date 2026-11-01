import {
  Banknote,
  BriefcaseBusiness,
  BuildingComplex,
  ChartNoAxesColumn,
  FileBadge,
  Globe,
  IdCard,
  Keyboard,
  Landmark,
  Languages,
  MonitorCheck,
  ReceiptText,
  Replace,
  Stamp,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const setupServices: Service[] = [
  {
    id: "company-formation",
    name: "Company Formation",
    description:
      "End-to-end assistance for setting up your business, with every step coordinated with the relevant authorities.",
    icon: BuildingComplex,
  },
  {
    id: "foreign-ownership",
    name: "100% Foreign Ownership",
    description:
      "Professional guidance for eligible investors and companies exploring foreign ownership and suitable business structures in Qatar.",
    icon: Globe,
  },
  {
    id: "commercial-registration",
    name: "Commercial Registration",
    description:
      "Support with Commercial Registration applications, renewals, amendments and related requirements.",
    icon: FileBadge,
  },
  {
    id: "partnership-change",
    name: "Partnership Change",
    description:
      "Partnership amendments, ownership changes, and the documents and procedures that go with them.",
    icon: Replace,
  },
  {
    id: "commercial-permit",
    name: "Commercial Permit Services",
    description:
      "Commercial permit applications, renewals, amendments and other related requirements.",
    icon: IdCard,
  },
  {
    id: "document-clearance",
    name: "Document Clearance",
    description:
      "Document processing, clearances, attestations, submissions and related administrative requirements.",
    icon: Stamp,
  },
  {
    id: "pro-services",
    name: "PRO Services",
    description:
      "Government procedures, submissions, documentation and follow-ups, handled on behalf of your business.",
    icon: BriefcaseBusiness,
  },
];

export const supportServices: Service[] = [
  {
    id: "dhareeba-noc",
    name: "Dhareeba NOC",
    description:
      "Help with Dhareeba procedures and NOC requirements, so your tax and government documents stay in order.",
    icon: ReceiptText,
  },
  {
    id: "hukoomi-services",
    name: "Hukoomi Services",
    description:
      "Support with online government services and digital transactions through Qatar's government platforms.",
    icon: MonitorCheck,
  },
  {
    id: "wage-protection-system",
    name: "Wage Protection System (WPS)",
    description:
      "Guidance on WPS requirements so employee salary processing stays compliant every month.",
    icon: Banknote,
  },
  {
    id: "bank-account-support",
    name: "Bank Account Support",
    description:
      "Help with the documents and administrative requirements for opening a corporate bank account.",
    icon: Landmark,
  },
  {
    id: "audit-services",
    name: "Audit Services",
    description:
      "Coordination and support for professional audits, helping you keep proper financial records and meet your obligations.",
    icon: ChartNoAxesColumn,
  },
  {
    id: "translation-services",
    name: "Translation Services",
    description:
      "Professional translation of business, legal, administrative and official documents in Arabic and English.",
    icon: Languages,
  },
  {
    id: "arabic-english-typing",
    name: "English & Arabic Typing",
    description:
      "Accurate bilingual typing for applications, forms, correspondence, contracts and official requirements.",
    icon: Keyboard,
  },
];

export const allServices = [...setupServices, ...supportServices];

export const serviceOptions = [
  ...allServices.map((service) => service.name),
  "Not sure yet",
];

export const footerServices = [
  { id: "company-formation", name: "Company Formation" },
  { id: "commercial-registration", name: "Commercial Registration" },
  { id: "pro-services", name: "PRO Services" },
  { id: "document-clearance", name: "Document Clearance" },
  { id: "wage-protection-system", name: "Wage Protection System (WPS)" },
  { id: "dhareeba-noc", name: "Dhareeba NOC" },
];
