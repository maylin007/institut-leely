import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Nos Soins",
  description:
    "Découvrez nos soins : maquillage semi-permanent, soins du visage, massages, épilations, manucure et pédicure. Institut de Beauté Leely à Papeete.",
};

interface Service {
  name: string;
  duration: string;
  price: string;
}

interface Category {
  id: string;
  title: string;
  image: string;
  services: Service[];
}

const categories: Category[] = [
  {
    id: "semi-permanent",
    title: "Maquillage Semi-Permanent",
    image: "https://imgs.search.brave.com/kMKypnZZVNgp-ZZHVhK5NIQpdDOXDzv3XeJ__48LZIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Ro/ZXRpcXVlLXRyZW1v/aWxsZS5jb20vYXBw/L3VwbG9hZHMvMjAy/Mi8xMi9zb3VyY2ls/cy10cmVtb2lsbGUt/cGFyaXMtMS1zY2Fs/ZWQuanBn",
    services: [
      { name: "Sourcils complets", duration: "90 min", price: "25 000" },
      { name: "Eye-liner supérieur", duration: "60 min", price: "20 000" },
      { name: "Eye-liner inférieur", duration: "45 min", price: "15 000" },
      { name: "Contour des lèvres", duration: "60 min", price: "22 000" },
      { name: "Retouche (dans les 3 mois)", duration: "45 min", price: "12 000" },
    ],
  },
  {
    id: "visage",
    title: "Soins du Visage",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    services: [
      { name: "Soin hydratant", duration: "60 min", price: "8 500" },
      { name: "Soin anti-âge premium", duration: "75 min", price: "12 000" },
      { name: "Soin coup d'éclat", duration: "45 min", price: "7 000" },
      { name: "Nettoyage de peau", duration: "60 min", price: "7 500" },
      { name: "Soin contour des yeux", duration: "30 min", price: "5 500" },
    ],
  },
  {
    id: "massages",
    title: "Massages",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    services: [
      { name: "Massage relaxant", duration: "60 min", price: "9 000" },
      { name: "Massage relaxant", duration: "90 min", price: "13 000" },
      { name: "Modelage drainant", duration: "60 min", price: "9 500" },
      { name: "Massage dos & nuque", duration: "30 min", price: "5 500" },
      { name: "Gommage corps", duration: "30 min", price: "6 000" },
    ],
  },
  {
    id: "epilation",
    title: "Épilation",
    image: "https://imgs.search.brave.com/TdYV_s7dM6am6rr1fwzMoIORXFzmqeMZTbHzmThiSKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbWFpdHJlLWFw/cGxpcXVlLWNpcmUt/ZXBpbGVyLXJvc2Ut/amFtYmUtamV1bmUt/ZmVtbWUtcG91ci1l/cGlsYXRpb24tZXBp/bGF0aW9uLWNpcmVf/Mjg5ODM2LTY1Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA",
    services: [
      { name: "Jambes complètes", duration: "30 min", price: "5 500" },
      { name: "Demi-jambes", duration: "20 min", price: "3 500" },
      { name: "Maillot classique", duration: "15 min", price: "3 000" },
      { name: "Maillot intégral", duration: "20 min", price: "4 500" },
      { name: "Aisselles", duration: "10 min", price: "2 000" },
      { name: "Bras complets", duration: "20 min", price: "3 000" },
      { name: "Visage (lèvre + sourcils)", duration: "15 min", price: "2 500" },
      { name: "Sourcils", duration: "10 min", price: "1 500" },
    ],
  },
  {
    id: "mains-pieds",
    title: "Beauté des Mains & Pieds",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    services: [
      { name: "Manucure complète", duration: "45 min", price: "4 500" },
      { name: "Pédicure complète", duration: "45 min", price: "5 000" },
      { name: "Pose vernis semi-permanent mains", duration: "45 min", price: "5 500" },
      { name: "Pose vernis semi-permanent pieds", duration: "45 min", price: "5 500" },
      { name: "Dépose vernis semi-permanent", duration: "20 min", price: "2 000" },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage",
    image: "https://imgs.search.brave.com/6CZ77rNJVssUnmmDw_Ed7BkldBEuggbLE2xcxAf8RWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzMxLzc0LzYy/LzM2MF9GXzUzMTc0/NjIzMF9vMGpaSTNZ/Y1RtZXZuSnZrZGx5/c2JGTm5TMVA1bVFi/US5qcGc",
    services: [
      { name: "Maquillage jour", duration: "30 min", price: "5 000" },
      { name: "Maquillage soirée / événement", duration: "45 min", price: "7 000" },
      { name: "Maquillage mariée", duration: "60 min", price: "12 000" },
      { name: "Cours de maquillage", duration: "60 min", price: "8 000" },
    ],
  },
];

export default function SoinsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
              Nos prestations
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-light text-dark mb-6">
              Catalogue des Soins
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto font-light leading-relaxed">
              Tous nos soins sont réalisés sur rendez-vous
              par des professionnelles qualifiées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-divider py-3 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-6 justify-start md:justify-center">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
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
            key={category.id}
            id={category.id}
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
                      src={category.image}
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
                    <div className="col-span-7">Soin</div>
                    <div className="col-span-3 text-right">Durée</div>
                    <div className="col-span-2 text-right">Tarif</div>
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
