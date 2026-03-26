import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'Institut de Beauté Leely. 46 Rue Georges Lagarde, Papeete. Téléphone : 40 42 66 42. Parking gratuit.",
};

export default function ContactPage() {
  return <ContactContent />;
}
