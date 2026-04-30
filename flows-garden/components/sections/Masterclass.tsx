"use client";

import { motion } from "framer-motion";

export function Masterclass() {
  return (
    <section
      data-layer="Workshop Teaser Section"
      className="relative flex w-full justify-center bg-transparent px-10 py-[100px] lg:px-20"
      style={{ transform: "rotate(0deg)", opacity: 1 }}
    >
      <div
        data-layer="Container"
        className="relative flex h-[737px] w-full max-w-[1184px] flex-none flex-col items-center overflow-hidden rounded-[24px] px-6 py-8 text-[#FFFFFF]"
        style={{ margin: "0 40px", width: "calc(100% - 80px)", maxWidth: "1184px", height: "737px", backgroundColor: "#5A4038", transform: "rotate(0deg)", opacity: 1 }}
      >

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 flex w-full flex-col items-center justify-between"
          style={{ height: "100%" }}
        >
          <div className="flex flex-col items-center gap-8 pt-12">
            <p
              className="text-[12px] font-bold uppercase leading-[16px] tracking-[2.4px] text-[#D4B5AB]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hands-on Learning
            </p>

            <h2
              className="max-w-[768px] text-center font-normal italic leading-[88px] text-white"
              style={{ fontFamily: "var(--font-display)", fontSize: "72px", letterSpacing: "-3.6px" }}
            >
              Grow your own sanctuary with our masterclass workshops.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                className="inline-flex h-[56px] items-center justify-center rounded-full bg-[#711E0E] px-12 text-[16px] font-bold text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Summer Schedule
              </button>
              <button
                className="inline-flex h-[56px] items-center justify-center rounded-full bg-[#F9DDD4] px-12 text-[16px] font-bold text-[#6B4838] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Gift a Workshop
              </button>
            </div>
          </div>

          <div className="mb-12 flex flex-wrap items-end justify-center gap-20">
            <div className="flex flex-col items-center text-center">
              <p className="text-[44px] font-normal italic leading-[44px] text-[#F4FFC8]" style={{ fontFamily: "var(--font-display)" }}>
                12+
              </p>
              <p className="mt-2 text-[11px] uppercase leading-[14px] tracking-[1.1px] text-[#D4B5AB]" style={{ fontFamily: "var(--font-body)" }}>
                Monthly Events
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[44px] font-normal italic leading-[44px] text-[#F4FFC8]" style={{ fontFamily: "var(--font-display)" }}>
                2.4k
              </p>
              <p className="mt-2 text-[11px] uppercase leading-[14px] tracking-[1.1px] text-[#D4B5AB]" style={{ fontFamily: "var(--font-body)" }}>
                Students Taught
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-[44px] font-normal italic leading-[44px] text-[#F4FFC8]" style={{ fontFamily: "var(--font-display)" }}>
                15
              </p>
              <p className="mt-2 text-[11px] uppercase leading-[14px] tracking-[1.1px] text-[#D4B5AB]" style={{ fontFamily: "var(--font-body)" }}>
                Urban Sites
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
