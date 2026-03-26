"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function SoinsContent() {
  const { lang } = useLanguage();
  const t = translations.soins;
  const categories = t.categories[lang];
  const categoryIds = t.categoryIds;
  const categoryImages = t.categoryImages;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              {t.nosPrestations[lang]}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">
              {t.catalogueTitle[lang]}
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light leading-relaxed">
              {t.catalogueDesc[lang]}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-divider py-3 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-6 justify-start md:justify-center">
          {categories.map((cat, i) => (
            <a
              key={categoryIds[i]}
              href={`#${categoryIds[i]}`}
              className="flex-shrink-0 text-[12px] tracking-wider uppercase text-muted hover:text-brand transition-colors whitespace-nowrap py-1"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6">
        {categories.map((category, index) => (
          <section
            key={categoryIds[index]}
            id={categoryIds[index]}
            className={`scroll-mt-40 py-20 ${
              index < categories.length - 1 ? "border-b border-divider" : ""
            }`}
          >
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={categoryImages[index]}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Services table */}
                <div className="lg:col-span-8">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-10">
                    {category.title}
                  </h2>

                  {/* Table header */}
                  <div className="hidden sm:grid grid-cols-12 text-[11px] tracking-wider uppercase text-muted pb-4 border-b border-divider mb-1">
                    <div className="col-span-7">{t.tableHeaderSoin[lang]}</div>
                    <div className="col-span-3 text-right">{t.tableHeaderDuree[lang]}</div>
                    <div className="col-span-2 text-right">{t.tableHeaderTarif[lang]}</div>
                  </div>

                  {/* Services */}
                  {category.services.map((service, i) => (
                    <div
                      key={`${service.name}-${i}`}
                      className="grid grid-cols-12 items-baseline py-4 border-b border-divider/50 group hover:bg-light/50 transition-colors px-1 -mx-1"
                    >
                      <div className="col-span-12 sm:col-span-7">
                        <p className="text-dark text-[15px]">{service.name}</p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 text-right">
                        <p className="text-muted text-sm">{service.duration}</p>
                      </div>
                      <div className="col-span-6 sm:col-span-2 text-right">
                        <p className="text-dark font-medium text-[15px]">
                          {service.price}
                          <span className="text-muted font-normal text-xs ml-1">
                            XPF
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </section>
        ))}
      </div>

      {/* spacer before footer */}
      <div className="h-px" />
    </>
  );
}
