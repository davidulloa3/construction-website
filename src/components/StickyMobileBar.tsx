import Link from "next/link";

export default function StickyMobileBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-14 flex"
      style={{ borderTop: "1px solid #1565c0", backgroundColor: "#0f0f0f" }}
      role="navigation"
      aria-label="Mobile quick actions"
    >
      {/* Call */}
      <a
        href="tel:+17144871860"
        className="flex-1 flex items-center justify-center gap-2 text-[#f5f5f5] active:bg-[#1a1a1a] transition-colors border-r border-[#2a2a2a]"
        aria-label="Call Ulloa Construction at (714) 487-1860"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1565c0]" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="font-semibold text-sm">(714) 487-1860</span>
      </a>

      {/* Get a Quote */}
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold text-sm transition-colors"
        aria-label="Get a free quote"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" />
        </svg>
        Get a Quote
      </Link>
    </div>
  );
}
