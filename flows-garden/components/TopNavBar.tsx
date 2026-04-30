"use client";

export function TopNavBar() {
  return (
    <header
      data-layer="Top Navigation Bar"
      className="fixed left-0 right-0 top-0 z-30 bg-[rgba(244,255,200,0.9)] backdrop-blur-[24px]"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div
          data-layer="Container"
          className="flex h-[92px] items-center justify-between"
          style={{
            paddingTop: "24px",
            paddingRight: "24px",
            paddingBottom: "24px",
            paddingLeft: "48px",
          }}
        >
          {/* Link Container */}
          <div
            data-layer="Link"
            className="flex flex-col items-start justify-center"
            style={{
              width: "144.84px",
              height: "32px",
            }}
          >
            <a
              href="#"
              className="leading-none text-[var(--color-primary)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: "32px",
                letterSpacing: "0px",
                color: "#23422a",
              }}
            >
              Flows Garden
            </a>
          </div>

          {/* Nav Links Container */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-12 md:flex lg:gap-16"
            style={{
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "rgba(117,88,77,0.92)",
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

          {/* Button Container */}
          <div
            data-layer="Button:css-transform"
            className="flex items-center"
            style={{
              width: "172.27px",
              height: "44px",
              paddingTop: "1.1px",
              paddingBottom: "1.1px",
              paddingLeft: "4.43px",
              paddingRight: "4.43px",
            }}
          >
            <a
              data-layer="Button"
              href="#"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-[var(--color-surface)] shadow-[0_10px_24px_rgba(35,66,42,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#223f29]"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div
          data-layer="Horizontal Divider"
          className="h-px bg-[rgba(35,66,42,0.18)]"
        />
      </div>
    </header>
  );
}
