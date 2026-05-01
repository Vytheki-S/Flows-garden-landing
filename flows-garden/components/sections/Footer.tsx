import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#795B4E]">
      <div className="relative mx-auto h-[203px] w-full px-7 pt-[42px]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-start">
          <div className="flex flex-col gap-4">
            <p className="text-[13px] italic leading-none text-[rgba(244,255,200,0.95)]" style={{ fontFamily: "var(--font-display)" }}>
              Flows Garden
            </p>
            <p className="max-w-[245px] text-[11px] leading-[1.35] text-[rgba(244,255,200,0.72)]">
              Cultivating resilient urban ecosystems through education and organic design.
            </p>
          </div>

          <nav aria-label="Footer" className="flex items-center gap-10 pt-[25px] text-[11px] leading-none text-[rgba(244,255,200,0.64)]">
            <a className="transition-colors hover:text-[rgba(244,255,200,1)]" href="#">
              Sustainability
            </a>
            <a className="transition-colors hover:text-[rgba(244,255,200,1)]" href="#">
              Contact
            </a>
            <a className="transition-colors hover:text-[rgba(244,255,200,1)]" href="#">
              Journal
            </a>
            <a className="transition-colors hover:text-[rgba(244,255,200,1)]" href="#">
              Privacy
            </a>
          </nav>

          <button
            type="button"
            aria-label="Share Flows Garden"
            className="inline-flex h-7 w-7 items-center justify-center justify-self-end rounded-full bg-[rgba(244,255,200,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Image src="/images/Icon%20(2).svg" alt="" width={14} height={15} className="h-[15px] w-[14px]" aria-hidden="true" />
          </button>
        </div>

        <div className="absolute left-7 right-7 top-[134px] h-3 bg-[linear-gradient(90deg,transparent,rgba(244,255,200,0.16),transparent)]" />

        <div className="absolute left-7 right-7 top-[163px] text-center text-[10px] uppercase leading-none tracking-[0.13em] text-[rgba(244,255,200,0.42)]">
          &copy; 2024 FLOWS GARDEN - CULTIVATING THE WILD
        </div>

        <button
          aria-label="Open schedule"
          className="pointer-events-auto absolute bottom-6 right-7 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#8F200E] text-white shadow-[0_16px_24px_rgba(17,11,7,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
            <path d="M16 3v4M8 3v4M3 11h18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
