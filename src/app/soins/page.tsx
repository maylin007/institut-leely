import type { Metadata } from "next";
import SoinsContent from "./SoinsContent";

export const metadata: Metadata = {
  title: "Nos Soins",
  description:
    "Découvrez nos soins : maquillage semi-permanent, soins du visage, massages, épilations, manucure et pédicure. Institut de Beauté Leely à Papeete.",
};

export default function SoinsPage() {
  return <SoinsContent />;
}
