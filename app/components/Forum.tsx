export default function Forum() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <i className="fa-brands fa-github text-5xl mb-6 text-slate-400 fade-in"></i>
        <p className="section-label text-slate-400 mb-4 fade-in">
          GitHub Discussions
        </p>
        <h2
          className="text-5xl text-white mb-5 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Community Forum
        </h2>
        <p className="text-slate-300 text-lg mb-3 leading-relaxed fade-up">
          Have you spotted something in the footage? Can you help transcribe the
          Spanish audio? Do you recognize the Nissan Rogue, the mysterious woman
          on speakerphone, or the scout in the white hat?
        </p>
        <p className="text-slate-400 mb-10 fade-up">
          Join the conversation on GitHub Discussions — no coding required, just
          a free GitHub account. Every observation matters.
        </p>
        <a
          href="https://github.com/Sittiphat/help-burger-basket/discussions"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-slate-100 transition-colors fade-up"
        >
          <i className="fa-brands fa-github text-xl"></i>
          Open Community Forum
        </a>
      </div>
    </section>
  );
}
