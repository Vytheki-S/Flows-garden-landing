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

          <div className="relative mx-auto w-full max-w-[360px] lg:ml-auto lg:max-w-[520px] lg:justify-self-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto w-full pb-8 pl-7 sm:max-w-[430px] lg:max-w-[520px] lg:pb-10 lg:pl-10"
            >
              <div className="relative aspect-[296/370] w-full overflow-hidden rounded-[24px] rounded-tr-[88px] shadow-[0_22px_34px_rgba(35,66,42,0.22)] lg:rounded-[30px] lg:rounded-tr-[112px]">
                <Image
                  src="/images/Overlay+Shadow.svg"
                  alt="Garden pathway through lush plants"
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 390px, 296px"
                  priority
                  className="object-cover"
                />
              </div>

              <div
                className="absolute bottom-0 left-0 z-10 h-[192px] w-[192px] overflow-hidden rounded-bl-[128px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] border-8 border-[#F4FFC8] bg-[#F4FFC8]"
                style={{
                  boxShadow: "0px 8px 10px -6px #0000001A, 0px 20px 25px -5px #0000001A",
                }}
              >
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

