import { CircleCheck, Phone } from "lucide-react";
import Image from "next/image";
import { Stripes } from "@/components/stripes";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { site, whatsappUrl } from "@/lib/site";
import consultantsImage from "@/public/images/al-aflah-consultants-at-work.webp";

// Arabic copy from the company flyer.
const paragraphs = [
  "نحن جهة موثوقة متخصصة في تأسيس الأعمال، والتخليص والمعاملات الحكومية، وتقديم خدمات الدعم المؤسسي في قطر، حيث نساعد رواد الأعمال والمستثمرين والشركات الصغيرة والمتوسطة والشركات القائمة على استيفاء متطلبات الأعمال بكل ثقة واطمئنان.",
  "يجمع فريقنا ذو الخبرة بين المعرفة العملية والاحترافية والاهتمام بأدق التفاصيل، لتقديم حلول فعّالة وموثوقة ومتوافقة مع الأنظمة، ومصممة خصيصًا لتلبية احتياجات كل عميل.",
  "من تأسيس الشركات الجديدة إلى إدارة المعاملات الحكومية والمتطلبات الإدارية المستمرة، نعمل على تبسيط الإجراءات المعقدة، لنمنح عملاءنا الوقت والتركيز اللازمين لبناء أعمالهم وتطويرها وتحقيق النمو المستدام.",
];

const services = [
  "تأسيس الشركات والملكية الأجنبية",
  "التنسيق مع مكاتب التدقيق المرخصة",
  "خدمات العلاقات العامة والمعاملات الحكومية",
  "الترجمة وتصديق الشهادات",
  "السجل التجاري والرخصة",
  "تعديلات السجل التجاري",
  "شهادة عدم الممانعة من «ضريبة»",
  "تخليص المعاملات والمستندات",
  "المساعدة في فتح الحسابات البنكية",
];

export function ArabicServices() {
  return (
    <section>
      <div className="site-container grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <h2 className="heading-xl font-arabic leading-[1.4]! text-brand">
            شريككم الموثوق نحو{" "}
            <span className="text-gold-ink">تحقيق النجاح في الأعمال التجارية</span>
          </h2>

          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.95] text-body">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-7">
            <p className="font-bold text-brand">تواصلوا معنا للحصول على عرض سعر واستشارة مجانية</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={whatsappUrl("السلام عليكم، أرغب في الاستفسار عن خدماتكم في قطر.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand tracking-normal"
              >
                <WhatsappIcon className="size-5" />
                تواصلوا عبر واتساب
              </a>
              {site.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center gap-2 font-sans font-bold text-brand hover:text-gold-ink"
                >
                  <Phone aria-hidden="true" className="size-4 text-gold-ink" />
                  <span dir="ltr">{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="relative isolate overflow-hidden rounded bg-brand text-white">
          <Stripes
            accent={false}
            lineClassName="stroke-white/5"
            className="absolute inset-0 -z-10 size-full"
          />
          <Image
            src={consultantsImage}
            alt="مستشارا أعمال يدوّنان ملاحظات خلال اجتماع عمل"
            sizes="(min-width: 1024px) 520px, 100vw"
            placeholder="blur"
            className="aspect-[16/7] w-full object-cover object-[50%_66%]"
          />
          <div className="p-7 sm:p-8">
            <h3 className="font-arabic text-[1.875rem] leading-snug text-gold">الخدمات</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service) => (
                <li key={service} className="flex gap-3 leading-relaxed">
                  <CircleCheck
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="mt-1 size-5 shrink-0 text-gold"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
