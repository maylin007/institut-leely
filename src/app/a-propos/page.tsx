import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'Institut",
  description:
    "Découvrez l'Institut de Beauté Leely à Papeete. Plus de 30 ans d'expertise en soins esthétiques et maquillage semi-permanent à Tahiti.",
};

const milestones = [
  { year: "1993", text: "Ouverture de l'Institut de Beauté Leely à Papeete." },
  { year: "1998", text: "Premières formations en maquillage semi-permanent à Paris." },
  { year: "2005", text: "Formations avancées — techniques de dernière génération." },
  { year: "2024", text: "Plus de 30 ans au service de la beauté à Tahiti." },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero split */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center px-6 lg:px-20 py-28">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                Notre histoire
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-8 leading-tight">
                Un institut de beauté
                <br />
                au coeur de Papeete
              </h1>
              <p className="text-muted leading-relaxed mb-6 text-[15px]">
                Depuis 1993, l&apos;Institut de Beauté Leely accueille ses
                clientes dans un cadre chaleureux et apaisant, au 46 Rue
                Georges Lagarde à Papeete.
              </p>
              <p className="text-muted leading-relaxed text-[15px]">
                Fondé par une passionnée de l&apos;esthétique, l&apos;institut
                s&apos;est rapidement imposé comme une référence à Tahiti,
                notamment grâce à son expertise unique en maquillage
                semi-permanent.
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
                Ce qui nous anime
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark">
                Nos valeurs
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Expertise",
                text: "Plus de 30 ans de pratique et des formations régulières à Paris pour rester à la pointe des techniques.",
              },
              {
                title: "Bienveillance",
                text: "Un accueil chaleureux et personnalisé. Chaque cliente est unique et mérite toute notre attention.",
              },
              {
                title: "Qualité",
                text: "Des produits professionnels sélectionnés avec soin et des protocoles rigoureux pour des résultats durables.",
              },
            ].map((value, i) => (
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
                Notre parcours
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-light text-dark">
                Les moments clés
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
                Formation continue
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-light text-dark mb-8">
                Formée par les meilleurs
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                Notre expertise en maquillage semi-permanent repose sur des
                formations dispensées par les plus grands noms du secteur à Paris.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "2 formations avec Bruno — pionnier du semi-permanent",
                  "2 formations avec Mélanie — techniques avancées",
                  "2 formations avec Jen — dernières innovations",
                ].map((item) => (
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
