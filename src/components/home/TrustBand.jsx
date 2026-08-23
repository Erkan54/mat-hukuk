export default function TrustBand() {
  return (
    <section className="py-8 md:py-10 bg-white border-y border-border/40 relative overflow-hidden bg-watermark">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6 md:gap-10">
          
          {/* Danışmanlık */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <svg className="w-4 h-4 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <span className="font-serif text-base sm:text-xl md:text-2xl font-bold text-navy tracking-wide text-right">
              Danışmanlık
            </span>
          </div>

          {/* Perfectly Centered Divider */}
          <div className="w-px h-7 sm:h-9 bg-gold/35 shrink-0 justify-self-center mx-1 sm:mx-2" />

          {/* Dava Takibi */}
          <div className="flex items-center justify-start gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <svg className="w-4 h-4 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                <path d="M7 21h10"/>
                <path d="M12 3v18"/>
                <path d="M3 7h18"/>
              </svg>
            </div>
            <span className="font-serif text-base sm:text-xl md:text-2xl font-bold text-navy tracking-wide text-left">
              Dava Takibi
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
