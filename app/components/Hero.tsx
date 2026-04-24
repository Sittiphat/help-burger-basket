export default function Hero() {
  return (
    <header className="hero-bg text-white pt-28 pb-24 px-6 text-center">
      <p className="section-label text-red-400 mb-5 fade-in hero-text">
        Monrovia, California — March 26, 2026
      </p>
      <h1
        className="text-6xl md:text-7xl mb-6 leading-tight fade-up hero-text"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        Justice for
        <br />
        <em>Burger Basket</em>
      </h1>
      <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed fade-up hero-text">
        Pan and Watt&apos;s home was burglarized while they were at work. Help
        us identify the perpetrators and support their recovery.
      </p>
      <a
        href="https://gofund.me/da3c6b3db"
        target="_blank"
        rel="noopener"
        className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors fade-up hero-text"
      >
        Donate on GoFundMe
      </a>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700/50 rounded-2xl overflow-hidden max-w-3xl mx-auto">
        {[
          { value: "$160k+", label: "Stolen in total" },
          { value: "30+", label: "Years of savings" },
          { value: "4–5", label: "Perpetrators" },
          { value: "MPD", label: "Actively investigating" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/70 px-6 py-6 fade-up hero-stat"
          >
            <p
              className="text-4xl text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {stat.value}
            </p>
            <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
