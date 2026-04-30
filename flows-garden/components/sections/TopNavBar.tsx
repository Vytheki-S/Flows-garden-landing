"use client";

export function TopNavBar() {
  return (
    <header
      data-layer="Top Navigation Bar"
      className="fixed left-0 right-0 top-0 z-30 bg-[#F4FFC8]"
    >
      <div className="mx-auto w-full">
        <div
          data-layer="Container"
          className="grid h-[92px] grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-12"
        >
          <div 
            data-layer="Link" 
            className="flex h-8 items-center justify-self-start" 
          >
            <a
              href="#"
              className="whitespace-nowrap leading-none text-[var(--color-primary)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "1",
                letterSpacing: "0px",
              }}
            >
              Flows Garden
            </a>
          </div>

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-12 justify-self-center md:flex lg:gap-16"
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "rgba(117,88,77,0.9)",
            }}
          >
            <a
              className="transition-colors hover:text-[var(--color-primary)]"
              href="#featured-flora"
            >
              Gallery
            </a>
            <a
              className="transition-colors hover:text-[var(--color-primary)]"
              href="#workshops"
            >
              Workshops
            </a>
            <a
              className="transition-colors hover:text-[var(--color-primary)]"
              href="#events"
            >
              Events
            </a>
            <a
              className="transition-colors hover:text-[var(--color-primary)]"
              href="#about"
            >
              About
            </a>
          </nav>

          <div
            data-layer="Button:css-transform"
            className="flex items-center justify-self-end"
          >
            <a
              data-layer="Button"
              href="#"
              className="inline-flex h-12 w-[172px] items-center justify-center rounded-full bg-[var(--color-primary)] text-[15px] font-semibold text-[var(--color-surface)] shadow-[0_10px_20px_rgba(35,66,42,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#223f29]"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
