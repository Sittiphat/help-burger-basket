const links = [
  {
    href: "https://www.instagram.com/theburgerbasket/",
    icon: "fa-brands fa-instagram text-pink-500",
    borderHover: "hover:border-pink-400",
    label: "Instagram",
    sub: "@theburgerbasket",
    delay: "delay-1",
  },
  {
    href: "https://www.facebook.com/burgerbasketmonrovia/",
    icon: "fa-brands fa-facebook text-blue-600",
    borderHover: "hover:border-blue-400",
    label: "Facebook",
    sub: "burgerbasketmonrovia",
    delay: "delay-2",
  },
  {
    href: "https://burgerbasketmonrovia.com/",
    icon: "fa-solid fa-globe text-red-600",
    borderHover: "hover:border-red-400",
    label: "Official Website",
    sub: "burgerbasketmonrovia.com",
    delay: "delay-3",
  },
];

export default function Social() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label mb-3 fade-in text-center">Online Presence</p>
        <h2
          className="text-4xl text-slate-900 mb-10 text-center fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Burger Basket — Follow &amp; Visit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className={`flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 ${l.borderHover} transition-colors fade-up ${l.delay}`}
            >
              <i className={`${l.icon} text-2xl flex-shrink-0`}></i>
              <div>
                <p className="font-semibold text-slate-900">{l.label}</p>
                <p className="text-sm text-slate-500">{l.sub}</p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-slate-400 flex-shrink-0"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
