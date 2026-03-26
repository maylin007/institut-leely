"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const serviceImages = [
  "https://imgs.search.brave.com/kMKypnZZVNgp-ZZHVhK5NIQpdDOXDzv3XeJ__48LZIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Ro/ZXRpcXVlLXRyZW1v/aWxsZS5jb20vYXBw/L3VwbG9hZHMvMjAy/Mi8xMi9zb3VyY2ls/cy10cmVtb2lsbGUt/cGFyaXMtMS1zY2Fs/ZWQuanBn",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
  "https://imgs.search.brave.com/TdYV_s7dM6am6rr1fwzMoIORXFzmqeMZTbHzmThiSKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbWFpdHJlLWFw/cGxpcXVlLWNpcmUt/ZXBpbGVyLXJvc2Ut/amFtYmUtamV1bmUt/ZmVtbWUtcG91ci1l/cGlsYXRpb24tZXBp/bGF0aW9uLWNpcmVf/Mjg5ODM2LTY1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
];

const serviceHrefs = [
  "/soins#semi-permanent",
  "/soins#visage",
  "/soins#massages",
  "/soins#epilation",
];

export default function Home() {
  const { lang } = useLanguage();
  const t = translations.home;
  const services = t.services[lang];
  const testimonials = t.testimonials[lang];

  return (
    <>
      {/* Hero — full screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">
              {t.heroSubtitle[lang]}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              {t.heroTitle1[lang]}
              <br />
              <span className="text-brand-200">{t.heroTitle2[lang]}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
              {t.heroDescription[lang]}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+68940426642"
                className="bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark"
              >
                {t.ctaRdv[lang]}
              </a>
              <Link
                href="/soins"
                className="border border-white/30 text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-white/10"
              >
                {t.ctaSoins[lang]}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.expertises[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">
                {t.soinsException[lang]}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link href={serviceHrefs[i]} className="group block relative overflow-hidden aspect-[4/3]">
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-white font-light mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/soins"
              className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white"
            >
              {t.voirTousSoins[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* Feature — Semi permanent */}
      <section className="bg-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto">
            <img
              src="https://imgs.search.brave.com/kMKypnZZVNgp-ZZHVhK5NIQpdDOXDzv3XeJ__48LZIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Ro/ZXRpcXVlLXRyZW1v/aWxsZS5jb20vYXBw/L3VwbG9hZHMvMjAy/Mi8xMi9zb3VyY2ls/cy10cmVtb2lsbGUt/cGFyaXMtMS1zY2Fs/ZWQuanBn"
              alt="Maquillage semi-permanent — sourcils"
              className="w-full h-full object-cover"
            />
          </div>

          <AnimatedSection className="flex items-center px-8 lg:px-20 py-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.specialite[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-light text-dark mb-8 leading-tight">
                {t.semiPermanentTitle1[lang]}
                <br />
                {t.semiPermanentTitle2[lang]}
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                {t.semiPermanentDesc[lang]}
              </p>
              <ul className="space-y-4 mb-10">
                {t.semiPermanentItems[lang].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px]">
                    <span className="w-5 h-px bg-brand" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/soins#semi-permanent"
                className="inline-block border border-dark text-dark px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-dark hover:text-white"
              >
                {t.enSavoirPlus[lang]}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                {t.temoignages[lang]}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">
                {t.ceQueDisent[lang]}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <div className="text-center">
                  <p className="text-muted leading-relaxed italic text-[15px] mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="w-8 h-px bg-brand mx-auto mb-4" />
                  <p className="text-[13px] tracking-wide uppercase text-dark">
                    {testimonial.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
