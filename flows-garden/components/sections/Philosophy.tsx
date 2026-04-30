"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      data-layer="Philosophy Section"
      className="relative flex w-full justify-center overflow-hidden bg-transparent px-10 py-[100px] lg:px-20"
      style={{
        minHeight: "720px",
        flex: "none",
        flexGrow: 0,
      }}
    >
      <div
        data-layer="Container"
        className="relative grid w-full max-w-[1184px] gap-[32px] lg:grid-cols-[472px_472px] lg:justify-between"
      >
        <motion.div
          data-layer="Container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="order-2 flex h-[512px] flex-col justify-center lg:order-1 lg:w-[472px]"
        >
          <div className="flex h-full flex-col justify-center rounded-[1px] px-2 py-2">
            <h2
              data-layer="Heading 2"
              className="h-[180px] w-[472px] text-[48px] font-normal italic leading-[60px] text-[#23422A]"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0px",
                verticalAlign: "middle",
              }}
            >
              Urban biodiversity is
              <br />
              not a luxury, but a
              <br />
              necessity for the soul.
            </h2>

            <div data-layer="Container" className="mt-8 space-y-6">
              <div data-layer="Container" className="flex h-[100px] w-[412.95px] flex-col gap-2" style={{ opacity: 1 }}>
                <div className="flex h-[20px] w-[412.95px] items-center gap-3">
                  <Image src="/images/Icon.svg" alt="Leaf icon" width={22} height={22} className="h-[20px] w-[20px]" />
                  <p className="h-[20px] w-[175.25px] text-[14px] font-bold uppercase leading-[20px] text-[#75584D]" style={{ letterSpacing: "1.4px", verticalAlign: "middle" }}>
                    Restorative Design
                  </p>
                </div>
                <p className="h-[72px] w-[412.95px] text-[16px] font-normal leading-[24px] text-[#424842]" style={{ letterSpacing: "0px", verticalAlign: "middle" }}>
                  We transform forgotten urban corners into resilient
                  <br />
                  micro-habitats that support local pollinators and native
                  <br />
                  flora.
                </p>
              </div>

              <div data-layer="Container" className="flex w-[413.69px] flex-col gap-2" style={{ opacity: 1 }}>
                <div className="flex h-[20px] w-[413.69px] items-center gap-3">
                  <Image src="/images/Icon2 .svg" alt="Knowledge icon" width={28} height={23} className="h-[20px] w-[24px]" />
                  <p className="h-[20px] whitespace-nowrap text-[14px] font-bold uppercase leading-[20px] text-[#75584D]" style={{ letterSpacing: "1.4px", verticalAlign: "middle" }}>
                    Shared Knowledge
                  </p>
                </div>
                <p className="h-[48px] w-[413.69px] text-[16px] font-normal leading-[24px] text-[#424842]" style={{ letterSpacing: "0px", verticalAlign: "middle" }}>
                  Education is the root of our garden. We host weekly
                  <br />
                  workshops to demystify permaculture for city dwellers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          data-layer="Container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="order-1 flex h-[512px] items-center justify-center lg:order-2 lg:w-[472px]"
        >
          <div className="grid w-[472px] grid-cols-2 gap-4">
            <div data-layer="Container" className="grid h-full grid-rows-[260px_196px] gap-4">
              <div data-layer="Overlay+Shadow left above" className="relative h-[260px] w-[228px] overflow-hidden rounded-[24px]">
                <Image src="/images/Overlay+Shadowleft%20above.svg" alt="Overlay shadow left above" fill priority className="object-cover" />
              </div>

              <div data-layer="Overlay+Shadow left down" className="relative h-[196px] w-[228px] overflow-hidden rounded-[24px]">
                <Image src="/images/Overlay+Shadow%20leftdown.svg" alt="Overlay shadow left down" fill className="object-cover" />
              </div>
            </div>

            <div data-layer="Container" className="grid h-full grid-rows-[192px_260px] gap-4">
              <div data-layer="Overlay+Shadow right above" className="relative h-[192px] w-[228px] overflow-hidden rounded-[24px]">
                <Image src="/images/Overlay+Shadow%20right%20above.svg" alt="Overlay shadow right above" fill className="object-cover" />
              </div>

              <div data-layer="Overlay+Shadow right down" className="relative h-[256px] w-[228px] overflow-hidden rounded-[24px]">
                <Image src="/images/Overlay+Shadow%20right%20down%20.svg" alt="Overlay shadow right down" fill className="object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Image
        src="/images/philosophy-leaf.svg"
        alt="Decorative botanical flourish"
        width={700}
        height={700}
        className="pointer-events-none absolute -bottom-28 right-0 z-0 w-[42vw] max-w-[320px] opacity-70 md:max-w-[420px]"
      />
    </section>
  );
}

