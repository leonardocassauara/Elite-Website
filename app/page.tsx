import HomeScreen from "@/containers/LandingPage/pages/HomeScreen/HomeScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Qualidade em pneus, autopeças e serviços automotivos. Elite Auto Center há 15 anos, garantindo sua satisfação!",
};

export default function Home() {
  return (
    <>
      <HomeScreen />
    </>
  );
}
