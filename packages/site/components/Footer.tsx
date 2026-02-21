export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-[#888888]">
          <span className="font-medium text-[#00FF88]">Σ</span>
          <span>sigmacode</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#888888]">
          <a
            href="https://github.com/anthropics/sigmacode"
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
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  );
}
