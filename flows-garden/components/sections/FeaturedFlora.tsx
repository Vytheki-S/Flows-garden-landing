"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    label: "NATIVE",
    title: "Crimson Bottlebrush",
    scientific: "CALLISTEMON CITRINUS",
    description: "A resilient shrub known for its architectural blooms that provide essential nectar for native honeycaters.",
    image: "/images/AB6AXuA-N-xkgs3GBeTC27LS0HnuQa9FZmnCR7KLxyaYGR4Qz2uZkbGSnRy8QQe7mvYpFckIFiiP-L019VZzRY8Y4auPXjhh-WcD7eveeCH2l0J26V1FMps_KrJ2-ubVY2HTL7oWHjbwZkkpNBrtQa_BCkX3XVMvw1G3ReOqeJatB59Eu25d2VeOC2tqJY1LFYxkQno4uL5yQhwMPpYui2.svg",
  },
  {
    id: 2,
    label: "RESILIENT",
    title: "Blue Glow Agave",
    scientific: "AGAVE 'BLUE GLOW'",
    description: "Perfect for urban heat islands, this succulent offers a striking silhouette with minimal water requirements.",
    image: "/images/AB6AXuDYgBVpkyWgij0rgDc-YbJY8F_K_pBHiFzHdlh5p1doWaS4N4LmqH0tPkhs2KfqmhDG5ErgFtMxK1vq6obnc5vPaXfUriYFFfjnpjpQkwqPmGUIRuPhuEm-is8K-DkBpuFzOEkHQR1RE40JKrF97oe-jXVFtECtGVjwh5JTNW6QXq22pr3-pSTXcG90eVY9hdtskLN7-5A6RCyGA6.svg",
  },
  {
    id: 3,
    label: "FOUNDATION",
    title: "Silver Lady Fern",
    scientific: "BLECHNUM GIBBUM",
    description: "Bringing a lush, prehistoric feel to shaded balconies and indoor-outdoor transition spaces.",
    image: "/images/AB6AXuBqV4a6Z7xlcCl4pVJ7AkLYelFZwgJ30fBvJ_STJsXYREvoyIdLPWOXq1gOFlH-BQOJd7NZ3qFWpcLUdfB4QqgIgVTbEDRwnmFflxFwS5VQb00iR-4vxUqByyH9Zn2J6PFw7Ezxof2sUgSQkrCqgqBLWAcUnS2Yulistds5MxcQmCHsukThZ17Qf0asJMjilnJ5O-3mKk0cSz (1).svg",
  },
];

export function FeaturedFlora() {
  return (
    <section id="featured-flora" className="w-full bg-[#FFFDF7] px-7 py-14 lg:px-12 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2
              className="text-[42px] italic leading-none text-[var(--color-primary)] sm:text-[52px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Featured Flora
            </h2>
            <p className="mt-7 max-w-[560px] text-[16px] leading-[1.55] text-[#75584D] sm:max-w-[515px]">
              A curated selection of the resilient species currently thriving in our community sanctuaries.
            </p>
          </div>

          <div className="hidden items-center gap-3 pt-[72px] sm:flex">
            <button
              type="button"
              aria-label="Previous flora"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D4D8C8] text-[22px] leading-none text-[var(--color-primary)] transition-colors hover:bg-[#F4F7EC]"
            >
              <span aria-hidden="true" className="-mt-0.5">
                ‹
              </span>
            </button>
            <button
              type="button"
              aria-label="Next flora"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D4D8C8] text-[22px] leading-none text-[var(--color-primary)] transition-colors hover:bg-[#F4F7EC]"
            >
              <span aria-hidden="true" className="-mt-0.5">
                ›
              </span>
            </button>
          </div>
        </div>

        <div className="mt-[70px] grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-[46px]">
          {cards.map((card) => (
            <article key={card.id} className={card.id === 2 ? "md:mt-8" : ""}>
              <div className="relative aspect-[240/320] w-full overflow-hidden rounded-[12px] bg-[#EEF1E6]">
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(min-width: 1024px) 340px, (min-width: 768px) 30vw, 100vw" priority={card.id === 1} />
                <div className="absolute right-4 top-4 rounded-full bg-[#ECFAB9] px-3 py-1 text-[9px] font-bold uppercase leading-none tracking-[0.08em] text-[var(--color-primary)]">
                  {card.label}
                </div>
              </div>

              <h3
                className="mt-6 text-[25px] italic leading-none text-[var(--color-primary)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {card.title}
              </h3>
              <p className="mt-4 text-[11px] uppercase leading-none tracking-[0.12em] text-[#75584D]">{card.scientific}</p>
              <p className="mt-4 text-[12px] leading-[1.65] text-[#596058]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
