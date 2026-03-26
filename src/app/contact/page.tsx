import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { HoursTable } from "@/components/OpenStatus";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'Institut de Beauté Leely. 46 Rue Georges Lagarde, Papeete. Téléphone : 40 42 66 42. Parking gratuit.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              Nous trouver
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">
              Contactez-nous
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light">
              Prenez rendez-vous par téléphone ou passez nous voir
              directement à l&apos;institut.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <AnimatedSection>
                {/* Contact info */}
                <div className="space-y-10">
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                      Téléphone
                    </p>
                    <a
                      href="tel:+68940426642"
                      className="font-[family-name:var(--font-display)] text-3xl text-dark hover:text-brand transition-colors"
                    >
                      40 42 66 42
                    </a>
                    <p className="text-muted text-sm mt-2">Sur rendez-vous</p>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                      Facebook
                    </p>
                    <a href="https://www.facebook.com/InstitutLeely/" target="_blank" rel="noopener noreferrer" className="text-dark text-[15px] hover:text-brand transition-colors">Institut de Beaute Leely</a>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
                      Adresse
                    </p>
                    <p className="text-dark text-[15px]">46 Rue Georges Lagarde</p>
                    <p className="text-muted text-sm">(Rue d&apos;Air France)</p>
                    <p className="text-dark text-[15px]">Papeete 98713, Tahiti</p>
                    <p className="text-brand text-sm mt-3">Parking gratuit en face</p>
                  </div>

                  <div className="border-t border-divider pt-10">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                      Horaires d&apos;ouverture
                    </p>
                    <HoursTable />
                  </div>

                  <div className="border-t border-divider pt-10">
                    <div className="flex gap-4">
                      <a
                        href="tel:+68940426642"
                        className="flex-1 bg-brand text-white text-center px-6 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-brand-dark"
                      >
                        Appeler
                      </a>
                      <a
                        href="https://m.me/289080614509007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#0084FF] text-white text-center px-6 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 hover:bg-[#006acc]"
                      >
                        Messenger
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Map */}
            <AnimatedSection delay={0.2}>
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[500px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7!2d-149.568!3d-17.5418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzMwLjUiUyAxNDnCsDM0JzA0LjgiVw!5e0!3m2!1sfr!2spf!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Institut de Beauté Leely — Papeete"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
