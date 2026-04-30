"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="about" className="w-full bg-[var(--color-surface)] px-6 py-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid min-h-[606px] w-full max-w-[1184px] items-center gap-12 rounded-[24px] bg-[#ECFAB9] px-8 py-14 md:px-16 lg:grid-cols-[1fr_472px] lg:px-20"
      >
        <div className="max-w-[520px]">
          <h2
            className="text-[40px] italic leading-[1.25] text-[var(--color-primary)] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Urban biodiversity is
            <br />
            not a luxury, but a
            <br />
            necessity for the soul.
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex gap-5">
              <Image src="/images/Icon.svg" alt="" width={22} height={22} className="mt-0.5 h-[22px] w-[22px]" aria-hidden="true" />
              <div>
                <h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.12em] text-[#75584D]">Restorative Design</h3>
                <p className="mt-2 max-w-[420px] text-[16px] leading-[1.5] text-[#424842]">
                  We transform forgotten urban corners into resilient micro-habitats that support local pollinators and native flora.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Image src="/images/Icon2%20.svg" alt="" width={28} height={23} className="mt-0.5 h-[20px] w-[24px]" aria-hidden="true" />
              <div>
                <h3 className="text-[14px] font-bold uppercase leading-5 tracking-[0.12em] text-[#75584D]">Shared Knowledge</h3>
                <p className="mt-2 max-w-[445px] text-[16px] leading-[1.5] text-[#424842]">
                  Education is the root of our garden. We host weekly workshops to demystify permaculture for city dwellers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-[472px]">
          <div className="grid gap-4 sm:pt-10">
            <div className="relative h-[216px] overflow-hidden rounded-[18px] sm:h-[260px]">
              <Image src="/images/Overlay+Shadowleft%20above.svg" alt="Stone path garden planting" fill priority className="object-cover" />
            </div>
            <div className="relative h-[162px] overflow-hidden rounded-[18px] sm:h-[196px]">
              <Image src="/images/Overlay+Shadow%20leftdown.svg" alt="Bee visiting lavender flowers" fill className="object-cover" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative h-[162px] overflow-hidden rounded-[18px] sm:h-[192px]">
              <Image src="/images/Overlay+Shadow%20right%20above.svg" alt="Garden tools and plant pots" fill className="object-cover" />
            </div>
            <div className="relative h-[216px] overflow-hidden rounded-[18px] sm:h-[256px]">
              <Image src="/images/Overlay+Shadow%20right%20down%20.svg" alt="Community garden workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
