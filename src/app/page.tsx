import HeroSection from "./components/HeroSection";
import AboutAuthor from "./components/AboutAuthor";
import NovelaSection from "./components/NovelaSection";
import CuentoSection from "./components/CuentoSection";
import CronicaSection from "./components/CronicaSection";
import EnsayoSection from "./components/EnsayoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutAuthor />
      <NovelaSection />
      <CuentoSection />
      <CronicaSection />
      <EnsayoSection />
    </main>
  );
}
