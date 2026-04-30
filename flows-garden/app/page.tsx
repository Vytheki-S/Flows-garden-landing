import { TopNavBar } from "@/components/sections/TopNavBar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { FeaturedFlora } from "@/components/sections/FeaturedFlora";
import { Masterclass } from "@/components/sections/Masterclass";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="flex w-full flex-col items-center gap-[100px] bg-[var(--color-surface)] pt-[93px]">
        <Hero />
        <Philosophy />
        <FeaturedFlora />
        <Masterclass />
        <Footer />
      </main>
    </>
  );
}

