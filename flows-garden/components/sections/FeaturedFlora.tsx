"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    label: "NATIVE",
    title: "Crimson Bottlebrush",
    scientific: "CALLISTEMON CITRINUS",
    description: "A resilient shrub known for its architectural blooms that provide essential nectar for native honeyeaters.",
    image: "/images/flora-bottlebrush.svg",
    imageClassName: "rounded-[18px] rounded-tr-[8px]",
  },
  {
    id: 2,
    label: "RESILIENT",
    title: "Blue Glow Agave",
    scientific: "AGAVE 'BLUE GLOW'",
    description: "Perfect for urban heat islands, this succulent offers a striking silhouette with minimal water requirements.",
    image: "/images/flora-agave.svg",
    imageClassName: "rounded-[18px] rounded-tl-[8px]",
  },
  {
    id: 3,
    label: "FOUNDATION",
    title: "Silver Lady Fern",
    scientific: "BLECHNUM GIBBUM",
    description: "Bringing a lush, prehistoric feel to shaded balconies and indoor-outdoor transition spaces.",
    image: "/images/flora-fern.svg",
    imageClassName: "rounded-[18px] rounded-br-[8px]",
  },
];

export function FeaturedFlora() {
  return (
    <section id="featured-flora" className="w-full bg-[#FFFDF7] px-8 py-[58px] sm:px-10 lg:px-12 lg:py-[88px]">
      <div className="mx-auto w-full max-w-[1184px]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2
              className="text-[42px] italic leading-none text-[var(--color-primary)] sm:text-[48px] lg:text-[54px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Featured Flora
            </h2>
            <p className="mt-6 max-w-[535px] text-[14px] leading-[1.55] text-[#75584D] sm:text-[15px]">
              A curated selection of the resilient species currently thriving in our community sanctuaries.
            </p>
          </div>

          <div className="hidden items-center gap-4 pb-2 sm:flex">
            <button
              type="button"
              aria-label="Previous flora"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFDF7] text-[18px] leading-none text-[var(--color-primary)] shadow-[inset_0_0_0_1px_rgba(35,66,42,0.2)] transition-colors hover:bg-[#F4FFC8]"
            >
              <span aria-hidden="true" className="-mt-0.5">
                &lt;
              </span>
            </button>
            <button
              type="button"
              aria-label="Next flora"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFDF7] text-[18px] leading-none text-[var(--color-primary)] shadow-[inset_0_0_0_1px_rgba(35,66,42,0.2)] transition-colors hover:bg-[#F4FFC8]"
            >
              <span aria-hidden="true" className="-mt-0.5">
                &gt;
              </span>
            </button>
          </div>
        </div>

        <div className="mt-[58px] grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {cards.map((card) => (
            <article key={card.id} className={card.id === 2 ? "md:mt-[30px]" : ""}>
              <div className={`relative aspect-[240/320] w-full overflow-hidden bg-[#EEF1E6] ${card.imageClassName}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 30vw, 100vw"
                  priority={card.id === 1}
                />
                <div className="absolute right-4 top-4 rounded-full bg-[#ECFAB9] px-3 py-[5px] text-[8px] font-bold uppercase leading-none tracking-[0.12em] text-[var(--color-primary)]">
                  {card.label}
                </div>
              </div>

              <h3
                className="mt-6 text-[23px] italic leading-none text-[var(--color-primary)] lg:text-[25px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-[9px] uppercase leading-none tracking-[0.14em] text-[#75584D]">{card.scientific}</p>
              <p className="mt-5 max-w-[330px] text-[11px] leading-[1.7] text-[#596058]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
