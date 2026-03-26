"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function AProposContent() {
  const { lang } = useLanguage();
  const t = translations.aPropos;
  const values = t.values[lang];
  const milestones = t.milestones[lang];

  return (
    <>
      {/* Hero split */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center px-6 lg:px-20 py-28">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                {t.notreHistoire[lang]}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-8 leading-tight">
                {t.heroTitle1[lang]}
                <br />
                {t.heroTitle2[lang]}
              </h1>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">
                {t.heroP1[lang]}
              </p>
              <p className="text-muted leading-relaxed text-[15px]">
                {t.heroP2[lang]}
              </p>
            </AnimatedSection>
          </div>

          <div className="aspect-square lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
              alt="Institut de Beauté Leely"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-light">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.ceQuiNousAnime[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark">
                {t.nosValeurs[lang]}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.15}>
                <div>
                  <div className="w-8 h-px bg-brand mb-6" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-light text-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.notreParcours[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark">
                {t.momentsCles[lang]}
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="grid grid-cols-12 gap-8 py-8 border-b border-divider">
                  <div className="col-span-3 sm:col-span-2">
                    <p className="text-brand font-[family-name:var(--font-display)] text-2xl">
                      {m.year}
                    </p>
                  </div>
                  <div className="col-span-9 sm:col-span-10">
                    <p className="text-dark text-[15px] leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="bg-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <AnimatedSection className="flex items-center px-6 lg:px-20 py-28 order-2 lg:order-1">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.formationContinue[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-8">
                {t.formeeParLesMeilleurs[lang]}
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                {t.formationDesc[lang]}
              </p>
              <ul className="space-y-4 mb-10">
                {t.formationItems[lang].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px]">
                    <span className="w-5 h-px bg-brand flex-shrink-0" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <div className="aspect-square lg:aspect-auto order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
              alt="Formation professionnelle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </>
  );
}
