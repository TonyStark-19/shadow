import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ShadowShowcase } from "@/components/shadows/shadow-showcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div
        className="h-screen max-[500px]:h-[95vh]"
        // background pattern
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(75, 85, 99, 0.05) 19px,rgba(75, 85, 99, 0.05) 20px,transparent 20px,
        transparent 39px,rgba(75, 85, 99, 0.05) 39px,rgba(75, 85, 99, 0.05) 40px),
        repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(75, 85, 99, 0.05) 19px,rgba(75, 85, 99, 0.05) 20px,transparent 20px,transparent 39px,
        rgba(75, 85, 99, 0.05) 39px,rgba(75, 85, 99, 0.05) 40px),
        radial-gradient(circle at 20px 20px,rgba(55, 65, 81, 0.08) 2px,transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.08) 2px, transparent 2px)
    `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
        }}
      >

        <Navbar />
        {/* added margin */}
        <div className="max-[500px]:mt-5 mt-10">
          <Hero />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-28 max-[500px]:mt-20 max-[500px]:max-w-full">
        <ShadowShowcase />
      </div>

      <Footer />
    </div>
  );
}