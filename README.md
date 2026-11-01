# Al Aflah Business Consultancy website

Marketing site for [alaflahbusinessconsultancy.com](https://alaflahbusinessconsultancy.com), built with Next.js 16 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `lib/site.ts`: company facts (phones, emails, address, WhatsApp number, CR). Change them here and they update everywhere, including structured data.
- `lib/services.ts`: the 14 services shown on the site, the footer list and the enquiry form options.
- `lib/seo.ts`: Open Graph defaults and JSON-LD structured data.
- `app/contact/actions.ts`: enquiry form validation and the WhatsApp message.
- `public/brand/`: logo SVGs, rebuilt from the vector artwork in the company profile PDF.

## Enquiries

The enquiry form checks the details on the server, then opens WhatsApp with them filled in, addressed to `whatsappNumber` in `lib/site.ts`. The visitor still presses send in WhatsApp, and nothing is stored or emailed by the site.

## Deploying

Deploy to a Node.js host such as Vercel. The enquiry form and image optimization need a server, so a static export won't work.

When page content changes, update `lastModified` in `app/sitemap.ts`.
