"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Monthly Events" },
  { value: "2.4k", label: "Students Taught" },
  { value: "15", label: "Urban Sites" },
];

export function Masterclass() {
  return (
    <section id="workshops" className="w-full bg-[var(--color-surface)] px-6 py-20 lg:px-12">
      <div className="relative mx-auto h-[620px] w-full max-w-[1184px] overflow-hidden rounded-[32px] bg-[#745749] text-white">
        <div className="absolute inset-0 grid grid-cols-[1.3fr_1fr_1.3fr] grid-rows-[1fr_162px] opacity-55">
          <div className="bg-[#6A5045]" />
          <div className="bg-[#7F5E4D]" />
          <div className="bg-[#6A5045]" />
          <div className="bg-[#705548]" />
          <div className="bg-[#896650]" />
          <div className="bg-[#7A5B4B]" />
        </div>
        <div className="absolute inset-0 bg-[rgba(57,43,37,0.18)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-[78px] pt-[108px] text-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-[12px] font-bold uppercase leading-none tracking-[0.45em] text-[#E9AAA0]">Hands-on Learning</p>

            <h2
              className="mt-7 max-w-[640px] text-[54px] italic leading-[1.08] text-white md:text-[62px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Grow your own sanctuary with our masterclass workshops.
            </h2>

            <div className="mt-11 flex flex-col gap-5 sm:flex-row">
              <a
                href="#events"
                className="inline-flex h-14 min-w-[235px] items-center justify-center rounded-full bg-[#8F200E] px-9 text-[15px] font-bold text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.18),0_8px_10px_-6px_rgba(0,0,0,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Summer Schedule
              </a>
              <a
                href="#"
                className="inline-flex h-14 min-w-[224px] items-center justify-center rounded-full bg-[#F9D1C4] px-9 text-[15px] font-bold text-[#75584D] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Gift a Workshop
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-center gap-16 md:gap-[78px]">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[90px]">
                <p className="text-[34px] italic leading-none text-[#F4FFC8]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  {stat.value}
                </p>
                <p className="mt-4 text-[10px] uppercase leading-none tracking-[0.13em] text-[#D4B5AB]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
