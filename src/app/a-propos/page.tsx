import type { Metadata } from "next";
import AProposContent from "./AProposContent";

export const metadata: Metadata = {
  title: "L'Institut",
  description:
    "Découvrez l'Institut de Beauté Leely à Papeete. Plus de 30 ans d'expertise en soins esthétiques et maquillage semi-permanent à Tahiti.",
};

export default function AProposPage() {
  return <AProposContent />;
}
