import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShadowShowcase } from "@/components/shadows/shadow-showcase";

export default function Home() {
  return (
    <div className="min-h-screen w-full">

      <div className="max-w-3xl mx-auto ">
        <Navbar />
        <Hero />
      </div>

      <div className="max-w-4xl mx-auto mt-28">
        <ShadowShowcase />
      </div>
    </div>
  );
}