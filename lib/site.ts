const geo = { latitude: 25.250706, longitude: 51.5518 };

// Company facts from the AAC profile. Everything on the site reads from here.
export const site = {
  url: "https://alaflahbusinessconsultancy.com",
  domain: "alaflahbusinessconsultancy.com",
  name: "Al Aflah Business Consultancy",
  shortName: "Al Aflah",
  legalName: "Al Aflah Group Trading & Services",
  arabicName: "الافلح استشارات الأعمال",
  arabicTagline: "نجعل الأعمال أبسط، وندعمك في كل خطوة",
  summary:
    "Al Aflah Group Trading & Services: business setup, government liaison and corporate support in Qatar.",
  commercialRegistration: "131354",
  phones: [
    { display: "+974 3160 0110", href: "tel:+97431600110" },
    { display: "+974 3108 2726", href: "tel:+97431082726" },
  ],
  emails: ["info@alaflahbusinessconsultancy.com", "sales@alaflahbusinessconsultancy.com"],
  whatsappNumber: "97431600110",
  address: {
    lines: [
      "Building No. 80, First Floor, Office No. 01",
      "Zone 45, Street 840, Old Airport Street",
      "Doha, State of Qatar",
    ],
    short: "Building 80, Zone 45, Street 840, Old Airport Street, Doha",
    street:
      "Building No. 80, First Floor, Office No. 01, Zone 45, Street 840, Old Airport Street",
    locality: "Doha",
    country: "QA",
  },
  geo,
  mapUrl: `https://www.google.com/maps/dir/?api=1&destination=${geo.latitude}%2C${geo.longitude}`,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
