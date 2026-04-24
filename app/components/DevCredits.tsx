const devs = [
  {
    img: "/assets/images/devs/Jesse.jpeg",
    name: "Jesse Narkmanee",
    role: "Co-developer & site owner",
    github: "https://github.com/sittiphat",
    handle: "@sittiphat",
    delay: "delay-1",
  },
  {
    img: "/assets/images/devs/skylar.jpg",
    name: "Skylar Shi",
    role: "Co-developer",
    github: "https://github.com/skylarshi123",
    handle: "@skylarshi123",
    delay: "delay-2",
  },
];

export default function DevCredits() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-3 fade-in">Open Source</p>
        <h2
          className="text-4xl mb-3 text-slate-900 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Built With Love for Burger Basket
        </h2>
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto fade-up">
          This website was created by volunteers to help spread awareness and
          support recovery efforts. The source code is open and available on
          GitHub — if you know how to code, contributions are welcome.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-14 mb-12">
          {devs.map((dev) => (
            <div
              key={dev.name}
              className={`flex flex-col items-center gap-3 fade-up ${dev.delay}`}
            >
              <img
                src={dev.img}
                alt={dev.name}
                className="w-36 h-36 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="font-bold text-xl text-slate-900">{dev.name}</p>
                <p className="text-slate-500 mb-2">{dev.role}</p>
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <i className="fa-brands fa-github text-lg"></i> {dev.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/Sittiphat/help-burger-basket"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 bg-slate-900 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-slate-700 transition-colors fade-up"
        >
          <i className="fa-brands fa-github text-xl"></i>
          Contribute on GitHub
        </a>
      </div>
    </section>
  );
}
