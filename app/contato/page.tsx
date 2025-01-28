import Contact from "@/containers/LandingPage/pages/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Entre em contato com a equipe da Elite Auto Center.",
};

export default function Contato() {
  return <Contact />;
}
