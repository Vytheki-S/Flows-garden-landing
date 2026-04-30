"use client";

import Image from "next/image";

export function FeaturedFlora() {
  const cards = [
    {
      id: 1,
      label: "NATIVE",
      title: "Crimson Bottlebrush",
      scientific: "CALLISTEMON CITRINUS",
      description: "A resilient shrub known for its architectural blooms that provide essential nectar for native honeycaters.",
      image: "/images/AB6AXuA-N-xkgs3GBeTC27LS0HnuQa9FZmnCR7KLxyaYGR4Qz2uZkbGSnRy8QQe7mvYpFckIFiiP-L019VZzRY8Y4auPXjhh-WcD7eveeCH2l0J26V1FMps_KrJ2-ubVY2HTL7oWHjbwZkkpNBrtQa_BCkX3XVMvw1G3ReOqeJatB59Eu25d2VeOC2tqJY1LFYxkQno4uL5yQhwMPpYui2.svg",
      badgeBg: "#ECFAB9",
    },
    {
      id: 2,
      label: "RESILIENT",
      title: "Blue Glow Agave",
      scientific: "AGAVE 'BLUE GLOW'",
      description: "Perfect for urban heat islands, this succulent offers a striking silhouette with minimal water requirements.",
      image: "/images/AB6AXuDYgBVpkyWgij0rgDc-YbJY8F_K_pBHiFzHdlh5p1doWaS4N4LmqH0tPkhs2KfqmhDG5ErgFtMxK1vq6obnc5vPaXfUriYFFfjnpjpQkwqPmGUIRuPhuEm-is8K-DkBpuFzOEkHQR1RE40JKrF97oe-jXVFtECtGVjwh5JTNW6QXq22pr3-pSTXcG90eVY9hdtskLN7-5A6RCyGA6.svg",
      badgeBg: "#ECFAB9",
    },
    {
      id: 3,
      label: "FOUNDATION",
      title: "Silver Lady Fern",
      scientific: "BLECHNUM GIBBUM",
      description: "Bringing a lush, prehistoric feel to shaded balconies and indoor-outdoor transition spaces.",
      image: "/images/AB6AXuBqV4a6Z7xlcCl4pVJ7AkLYelFZwgJ30fBvJ_STJsXYREvoyIdLPWOXq1gOFlH-BQOJd7NZ3qFWpcLUdfB4QqgIgVTbEDRwnmFflxFwS5VQb00iR-4vxUqByyH9Zn2J6PFw7Ezxof2sUgSQkrCqgqBLWAcUnS2Yulistds5MxcQmCHsukThZ17Qf0asJMjilnJ5O-3mKk0cSz (1).svg",
      badgeBg: "#ECFAB9",
    },
  ];

  return (
    <section
      data-layer="Featured Flora Section"
      className="relative flex w-full flex-col items-start bg-[#FFFDF7] self-stretch px-10 py-[100px] lg:px-20"
      style={{
        width: "100%",
        minHeight: "1081.06px",
        flex: "none",
        alignSelf: "stretch",
        flexGrow: 0,
      }}
    >
      <div
        data-layer="Container"
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-[64px] px-12"
      >
        {/* Header */}
        <div
          data-layer="Header Container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "576px" }}>
            <h2
              data-layer="Heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "60px",
                letterSpacing: "0px",
                color: "#23422A",
                margin: 0,
                marginBottom: "24px",
              }}
            >
              Featured Flora
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0px",
                color: "#75584D",
                margin: 0,
                maxWidth: "360px",
              }}
            >
              A curated selection of the resilient species currently thriving in our community sanctuaries.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              type="button"
              aria-label="Previous"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                border: "1px solid #D4D8C8",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#23422A",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F4F7EC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                border: "1px solid #D4D8C8",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#23422A",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F4F7EC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          data-layer="Cards Container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            width: "100%",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              data-layer="Card"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0px 1px 2px 0px #0000000D",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Image Container */}
              <div
                className="relative overflow-hidden rounded-[12px]"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1.2",
                  position: "relative",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "12px",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority={card.id === 1}
                />
                {/* Label Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    backgroundColor: card.badgeBg,
                    borderRadius: "9999px",
                    padding: "4px 12px",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 700,
                    lineHeight: "15px",
                    letterSpacing: "1px",
                    color: "#23422A",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.label}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "30px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: "36px",
                    letterSpacing: "0px",
                    color: "#23422A",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                    letterSpacing: "1.2px",
                    color: "#75584D",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {card.scientific}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22.75px",
                    letterSpacing: "0px",
                    color: "#424842",
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
