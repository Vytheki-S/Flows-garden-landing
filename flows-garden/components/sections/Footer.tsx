export function Footer() {
  return (
    <footer className="relative w-full bg-[#75584D]">
      <div className="mx-auto flex h-[309px] max-w-[1184px] w-full flex-col justify-between px-6 py-8">
        {/* Top row: brand, nav, share */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-[1.15rem] italic text-[rgba(244,255,200,0.95)]" style={{ fontFamily: "var(--font-display)" }}>
              Flows Garden
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[rgba(244,255,200,0.78)]">
              Cultivating resilient urban ecosystems through education and organic design.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <nav aria-label="Footer" className="flex items-center gap-10 text-sm opacity-95 text-[rgba(244,255,200,0.8)]">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(244,255,200,0.12)] text-[rgba(244,255,200,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a3 3 0 1 0-2.83-4" />
                <path d="M6 15a3 3 0 1 0 0-6" />
                <path d="M18 20a3 3 0 1 0 0-6" />
                <path d="M8.6 10.9 14 8.8" />
                <path d="M14 15.2 8.6 13.1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div>
          <div className="mt-2 border-t border-[rgba(244,255,200,0.22)] pt-6 text-center text-xs uppercase tracking-[0.22em] text-[rgba(244,255,200,0.6)] sm:text-sm">
            © 2024 FLOWS GARDEN — CULTIVATING THE WILD
          </div>
        </div>

        {/* Floating calendar CTA (positioned relative to footer) */}
        <button
          aria-label="Open schedule"
          className="pointer-events-auto absolute right-8 bottom-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#711E0E] text-white shadow-[0_20px_30px_rgba(17,11,7,0.35)]"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
            <path d="M16 3v4M8 3v4M3 11h18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}