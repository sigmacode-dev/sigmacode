export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="flex items-center gap-1.5">
          <span className="translate-y-px text-lg font-bold leading-none text-[#00FF88]">Σ</span>
          <span className="text-sm font-medium text-[#FAFAFA] lg:text-base">sigmacode</span>
        </a>
        <div className="flex items-center gap-4 text-xs text-[#888888] lg:text-sm">
          <a
            href="https://github.com/sigmacode-dev/sigmacode"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            GitHub
          </a>
          <a
            href="https://www.producthunt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FAFAFA]"
          >
            Product Hunt
          </a>
          <span>CC BY-NC 4.0</span>
        </div>
      </div>
    </footer>
  );
}
