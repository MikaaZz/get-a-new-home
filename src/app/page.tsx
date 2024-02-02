import HeroSection from "@/components/hero-section/HeroSection";

export default async function Home() {
  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-between w-full"
      }
    >
      <HeroSection />
    </div>
  );
}
