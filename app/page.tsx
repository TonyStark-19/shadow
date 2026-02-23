import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShadowShowcase } from "@/components/shadows/shadow-showcase";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">

      <div className="relative max-w-3xl mx-auto h-dvh">
        <Navbar />
        <Hero />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <ShadowShowcase />
      </div>
    </div>
  );
}