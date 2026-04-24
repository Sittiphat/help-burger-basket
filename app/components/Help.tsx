const steps = [
  {
    n: "1",
    title: "Share this website.",
    body: "The more people who see the footage and photos, the higher the chance someone recognizes a face, a car, or a detail. Share on Facebook, Nextdoor, Instagram, and text it to anyone who lives in or near Monrovia.",
  },
  {
    n: "2",
    title: "Donate to their GoFundMe.",
    body: "Every dollar goes directly toward helping Pan and Watt rebuild after losing $140,000 in life savings and $20,000 in valuables. Please only donate if you have the means to.",
  },
  {
    n: "3",
    title: "Call or text Jesse if you have information.",
    body: null,
    phone: true,
  },
  {
    n: "4",
    title: "Support Burger Basket.",
    body: null,
    restaurant: true,
  },
];

export default function Help() {
  return (
    <section
      id="help"
      className="py-20"
      style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label text-red-300 mb-4 fade-in">Take Action</p>
        <h2
          className="text-5xl text-white mb-12 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          How You Can Help
        </h2>
        <div className="space-y-4">
          <div className="flex gap-5 items-start bg-white/10 border border-white/20 rounded-2xl p-6 fade-up delay-1">
            <span
              className="text-white font-bold text-2xl leading-none mt-1 flex-shrink-0"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              1
            </span>
            <p className="text-white/90 text-lg leading-relaxed">
              <strong className="text-white">Share this website.</strong> The
              more people who see the footage and photos, the higher the chance
              someone recognizes a face, a car, or a detail. Share on Facebook,
              Nextdoor, Instagram, and text it to anyone who lives in or near
              Monrovia.
            </p>
          </div>
          <div className="flex gap-5 items-start bg-white/10 border border-white/20 rounded-2xl p-6 fade-up delay-2">
            <span
              className="text-white font-bold text-2xl leading-none mt-1 flex-shrink-0"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              2
            </span>
            <p className="text-white/90 text-lg leading-relaxed">
              <strong className="text-white">Donate to their GoFundMe.</strong>{" "}
              Every dollar goes directly toward helping Pan and Watt rebuild
              after losing $140,000 in life savings and $20,000 in valuables.
              Please only donate if you have the means to.
            </p>
          </div>
          <div className="flex gap-5 items-start bg-white/10 border border-white/20 rounded-2xl p-6 fade-up delay-3">
            <span
              className="text-white font-bold text-2xl leading-none mt-1 flex-shrink-0"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              3
            </span>
            <p className="text-white/90 text-lg leading-relaxed">
              <strong className="text-white">
                Call or text Jesse if you have information.
              </strong>{" "}
              If you recognize anyone in the footage, know the Nissan Rogue, or
              have any information at all — contact Jesse at{" "}
              <a href="tel:8144069539" className="underline font-semibold">
                (814) 406-9539
              </a>{" "}
              or call the Monrovia Police Department directly.
            </p>
          </div>
          <div className="flex gap-5 items-start bg-white/10 border border-white/20 rounded-2xl p-6 fade-up delay-4">
            <span
              className="text-white font-bold text-2xl leading-none mt-1 flex-shrink-0"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              4
            </span>
            <p className="text-white/90 text-lg leading-relaxed">
              <strong className="text-white">Support Burger Basket.</strong>{" "}
              Come in and buy a burger! Every visit helps Pan and Watt stay on
              their feet, and they love the community&apos;s emotional support.
              Find them at{" "}
              <a
                href="https://burgerbasketmonrovia.com/"
                target="_blank"
                rel="noopener"
                className="underline font-semibold"
              >
                burgerbasketmonrovia.com
              </a>
              .
            </p>
          </div>
        </div>
        <a
          href="https://gofund.me/da3c6b3db"
          target="_blank"
          rel="noopener"
          className="block text-center mt-12 bg-white text-red-700 font-bold text-2xl py-6 rounded-2xl hover:bg-red-50 transition-colors fade-up"
        >
          Donate on GoFundMe
        </a>
      </div>
    </section>
  );
}
