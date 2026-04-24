export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <span className="text-white font-semibold text-sm tracking-wide">
          Burger Basket Support
        </span>
        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href="#story" className="nav-link text-slate-300">Story</a>
          <a href="#photos" className="nav-link text-slate-300">Photos</a>
          <a href="#evidence" className="nav-link text-slate-300">Evidence</a>
          <a href="#coverage" className="nav-link text-slate-300">Coverage</a>
          <a href="#updates" className="nav-link text-slate-300">Updates</a>
          <a
            href="https://gofund.me/da3c6b3db"
            target="_blank"
            rel="noopener"
            className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-1.5 rounded-full text-xs transition-colors"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}
