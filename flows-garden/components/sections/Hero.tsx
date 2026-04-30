"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative flex overflow-hidden bg-[var(--color-surface)]"
      style={{
        width: "100%",
        minHeight: "921px",
        padding: "120px 80px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1200px]"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[var(--color-secondary)] sm:text-[0.78rem]">
              — Established 2024
            </p>

            <h1
              className="mt-5 max-w-xl text-[var(--color-primary)]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "128px",
                lineHeight: "128px",
                letterSpacing: "-6.4px",
                verticalAlign: "middle",
              }}
            >
              Cultivating
              <span
                className="block pl-[0.15em] italic text-[var(--color-primary)]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "128px",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                }}
              >
                the <span className="text-[var(--color-tertiary)]">Wild</span>
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-[1.03rem] leading-[1.55] text-[color:rgba(117,88,77,0.92)] sm:text-[1.08rem]">
              Bridging the gap between concrete landscapes and thriving ecosystems. We design living journals through
              urban permaculture and community education.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#featured-flora"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-[var(--color-surface)] shadow-[0_10px_24px_rgba(35,66,42,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#223f29]"
              >
                Explore the Garden
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                Our Process
                <span aria-hidden="true" className="text-base">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:max-w-[520px] lg:justify-self-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto w-full"
              style={{ aspectRatio: "0.8" }}
            >
              <Image
                src="/images/Overlay+Shadow.svg"
                alt="Garden pathway through lush plants"
                width={1200}
                height={1500}
                priority
                className="leaf-mask-a h-full w-full max-w-[500px] object-cover lg:max-w-[500px]"
              />

              <div className="absolute -bottom-8 left-0 z-10 h-[192px] w-[192px] overflow-hidden leaf-mask-b">
                <Image
                  src="/images/AB6AXuCmLepISBQQbYoJ25TXPCrlWZUigiZ788WRgL0pCXu-zZ6Nvj9zRxHMeU_j6bdixjoPUKfXjCuIb3G3JjQbogp44UnbR7wJ78F0-65ZXCWzTfr94oiv-DI9mu4cIDQZwet_7z6mpsqO60vWNJHn8M_CJR7vMF63MYHJf0tWST3NOL5FKqIHNFG8qfxvO-xB3jzig8oKP2yMNrPKKr.svg"
                  alt="Hands holding young seedlings"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

