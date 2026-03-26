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

                  <div className="border-t border-divider pt-10 space-y-3">
                    <a href="tel:+68940426642" className="group flex items-center gap-4 py-3 transition-colors duration-300">
                      <span className="w-10 h-10 border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:bg-brand/5">
                        <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Telephone</p>
                        <p className="text-dark text-[15px] group-hover:text-brand transition-colors">40 42 66 42</p>
                      </div>
                    </a>
                    <a href="https://m.me/289080614509007" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-3 transition-colors duration-300">
                      <span className="w-10 h-10 border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:bg-brand/5">
                        <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Messenger</p>
                        <p className="text-dark text-[15px] group-hover:text-brand transition-colors">Envoyer un message</p>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/InstitutLeely/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-3 transition-colors duration-300">
                      <span className="w-10 h-10 border border-dark/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand group-hover:bg-brand/5">
                        <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </span>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Facebook</p>
                        <p className="text-dark text-[15px] group-hover:text-brand transition-colors">Institut de Beaute Leely</p>
                      </div>
                    </a>
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
