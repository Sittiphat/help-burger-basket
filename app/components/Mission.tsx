const items = [
  {
    icon: "fa-solid fa-eye",
    title: "Community Recognition",
    body: "Share footage and photos widely so the public can help identify the perpetrators and bring them to justice.",
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Find New Clues",
    body: "Invite neighbors, former witnesses, and the broader community to watch the footage and report anything they recognize — a face, a car, a voice, a detail.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Protect Future Victims",
    body: "This was a coordinated, professional operation. Documenting their methods publicly may help other families recognize and prevent the same tactics. When they are caught, they will not be able to hurt another family ever again.",
  },
];

export default function Mission() {
  return (
    <section className="bg-white border-b border-slate-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label mb-3 fade-in">Why This Site Exists</p>
        <h2
          className="text-4xl mb-10 text-slate-900 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Three goals. One purpose.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.title} className={`fade-up delay-${i + 1}`}>
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <i className={`${item.icon} text-red-600`}></i>
              </div>
              <p className="font-semibold text-slate-900 mb-2">{item.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
