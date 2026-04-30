export function SoilBar() {
  return (
    <div className="mt-12 rounded-[24px] px-6 py-5 text-[var(--color-surface)] sm:px-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(117,88,77,1) 0%, rgba(106,78,66,1) 48%, rgba(84,61,52,1) 100%)",
      }}
    >
      <p className="text-xs uppercase tracking-[0.24em] text-[rgba(244,255,200,0.8)]">Soil Ledger</p>
      <p className="mt-2 text-sm leading-relaxed sm:text-base">
        Rooted in craft, fed by weather, and documented like a living manuscript.
      </p>
    </div>
  );
}
