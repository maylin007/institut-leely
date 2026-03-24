import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Maquillage Semi-Permanent",
    description: "Sourcils, eye-liner, lèvres — un regard sublimé au quotidien.",
    image: "https://imgs.search.brave.com/kMKypnZZVNgp-ZZHVhK5NIQpdDOXDzv3XeJ__48LZIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Ro/ZXRpcXVlLXRyZW1v/aWxsZS5jb20vYXBw/L3VwbG9hZHMvMjAy/Mi8xMi9zb3VyY2ls/cy10cmVtb2lsbGUt/cGFyaXMtMS1zY2Fs/ZWQuanBn",
    href: "/soins#semi-permanent",
  },
  {
    title: "Soins du Visage",
    description: "Hydratants, anti-âge, éclat — des protocoles sur-mesure.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    href: "/soins#visage",
  },
  {
    title: "Massages",
    description: "Relaxants et modelants, une parenthèse de bien-être.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    href: "/soins#massages",
  },
  {
    title: "Épilation",
    description: "Techniques douces pour une peau nette et soyeuse.",
    image: "https://imgs.search.brave.com/TdYV_s7dM6am6rr1fwzMoIORXFzmqeMZTbHzmThiSKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbWFpdHJlLWFw/cGxpcXVlLWNpcmUt/ZXBpbGVyLXJvc2Ut/amFtYmUtamV1bmUt/ZmVtbWUtcG91ci1l/cGlsYXRpb24tZXBp/bGF0aW9uLWNpcmVf/Mjg5ODM2LTY1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
    href: "/soins#epilation",
  },
];

const testimonials = [
  {
    name: "Vaiana M.",
    text: "Leely est mon institut depuis 10 ans. Le semi-permanent des sourcils a changé ma routine beauté.",
  },
  {
    name: "Marie-Line T.",
    text: "Un accueil toujours chaleureux et des soins du visage qui font vraiment la différence.",
  },
  {
    name: "Hina R.",
    text: "Le massage relaxant est un pur moment de bonheur. L'ambiance est apaisante, on se sent comme chez soi.",
  },
];

export default function Home() {
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
              Papeete, Tahiti — Depuis 1993
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-8">
              Révélez votre
              <br />
              <span className="text-brand-200">beauté naturelle</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
              Spécialiste du maquillage semi-permanent et des soins esthétiques
              depuis plus de 30 ans.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+68940426642"
                className="bg-brand text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark"
              >
                Prendre rendez-vous
              </a>
              <Link
                href="/soins"
                className="border border-white/30 text-white px-8 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-white/10"
              >
                Découvrir nos soins
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
                Nos expertises
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">
                Des soins d&apos;exception
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link href={service.href} className="group block relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
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
              Voir tous nos soins
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
                Notre spécialité
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-light text-dark mb-8 leading-tight">
                Maquillage
                <br />
                Semi-Permanent
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                Depuis 1993, nous sublimons votre regard grâce au maquillage
                semi-permanent. Formée à Paris auprès des plus grands experts,
                notre esthéticienne maîtrise les techniques les plus avancées
                pour un résultat naturel et durable.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Sourcils — restructuration et densification",
                  "Eye-liner — regard intense et défini",
                  "Lèvres — contour et couleur naturelle",
                ].map((item) => (
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
                En savoir plus
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
                Témoignages
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark">
                Ce que disent nos clientes
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15}>
                <div className="text-center">
                  <p className="text-muted leading-relaxed italic text-[15px] mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="w-8 h-px bg-brand mx-auto mb-4" />
                  <p className="text-[13px] tracking-wide uppercase text-dark">
                    {t.name}
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
