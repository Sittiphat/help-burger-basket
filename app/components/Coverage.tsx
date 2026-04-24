const articles = [
  {
    href: "https://abc7.com/post/burger-basket-monrovia-temporarily-closes-thieves-target-owners-home-steal-140000-life-savings/18906915/",
    icon: "fa-solid fa-newspaper",
    outlet: "ABC7 News",
    headline: "Burger Basket temporarily closes after thieves steal $140K in life savings",
    delay: "delay-1",
  },
  {
    href: "https://www.cbsnews.com/losangeles/news/burger-basket-monrovia-life-savings-stolen/",
    icon: "fa-solid fa-newspaper",
    outlet: "CBS News Los Angeles",
    headline: "Burger Basket Monrovia: Life savings stolen",
    delay: "delay-2",
  },
  {
    href: "https://www.nbclosangeles.com/news/local/thieves-accused-of-stealing-140k-monrovia-home-break-in/3877760/",
    icon: "fa-solid fa-newspaper",
    outlet: "NBC Los Angeles",
    headline: "Thieves accused of stealing $140K in Monrovia home break-in",
    delay: "delay-3",
  },
  {
    href: "https://www.audacy.com/knxnews/news/local/monrovia-restaurant-owners-life-savings-stolen-by-thieves",
    icon: "fa-solid fa-radio",
    outlet: "KNX News Radio",
    headline: "Monrovia restaurant owners' life savings stolen by thieves",
    delay: "delay-4",
  },
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label mb-4 fade-in">News Coverage</p>
        <h2
          className="text-5xl mb-12 text-slate-900 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          TV &amp; Radio Coverage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="fade-up delay-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              CBS Los Angeles
            </p>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Uct1MrlM_0U"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
          <div className="fade-up delay-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              NBC Los Angeles
            </p>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZFjF-NY2sjU"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mb-10 fade-up">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            ABC7 News
          </p>
          <div className="rounded-2xl overflow-hidden bg-black flex justify-center shadow-md">
            <iframe
              src="https://abc7.com/video/embed?pid=18902214"
              width="640"
              height="360"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-12 shadow-sm fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-radio text-red-600"></i>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                KNX News Radio — Radio Interview
              </p>
              <p className="text-sm text-slate-400">April 20, 2026</p>
            </div>
          </div>
          <audio
            controls
            className="w-full"
            src="/Desktop 2026.04.20 - 02.42.18.03.mp3"
          >
            Your browser does not support the audio element.
          </audio>
        </div>

        <p className="section-label mb-6 fade-in">News Articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((a) => (
            <a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener"
              className={`flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-red-400 transition-colors fade-up ${a.delay}`}
            >
              <i className={`${a.icon} text-2xl text-red-600 flex-shrink-0`}></i>
              <div>
                <p className="font-semibold text-slate-900">{a.outlet}</p>
                <p className="text-sm text-slate-500">{a.headline}</p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-slate-400 flex-shrink-0"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
