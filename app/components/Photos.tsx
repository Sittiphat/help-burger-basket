const photos = [
  {
    src: "/assets/images/key_moments/1000005432.jpg",
    alt: "Scout — close-up front view, white hat",
    label: "Scout",
    labelColor: "text-red-400",
    caption: "Close-up front view — white hat",
  },
  {
    src: "/assets/images/key_moments/1000005437.jpg",
    alt: "Scout — side profile, white hat",
    label: "Scout",
    labelColor: "text-red-400",
    caption: "Side profile — white hat",
  },
  {
    src: "/assets/images/key_moments/IMG_6209.PNG",
    alt: "Scout peering through window from outside",
    label: "Scout",
    labelColor: "text-red-400",
    caption: "Peering through house window from outside to check if anyone is home",
  },
  {
    src: "/assets/images/key_moments/IMG_6223.PNG",
    alt: "Suspect at bathroom door — dark blue logo cap",
    label: "Suspect",
    labelColor: "text-amber-400",
    caption: "At bathroom door — dark blue cap with visible logo (entered through bathroom window)",
  },
  {
    src: "/assets/images/key_moments/IMG_6224.PNG",
    alt: "Two masked suspects on speakerphone",
    label: "Two Suspects",
    labelColor: "text-amber-400",
    caption: "Both masked and in all-black — talking to a mysterious woman on speakerphone",
  },
  {
    src: "/assets/images/key_moments/IMG_6231.PNG",
    alt: "Getaway vehicle — light gray Nissan Rogue SUV",
    label: "Getaway Vehicle",
    labelColor: "text-yellow-400",
    caption: "Light gray Nissan Rogue SUV — driver waited outside entire time",
  },
  {
    src: "/assets/images/key_moments/IMG_6232.PNG",
    alt: "Stolen license plate 9FIDO94",
    label: "Stolen Plate",
    labelColor: "text-yellow-400",
    caption: "License plate 9FIDO94 — stolen and fitted to the getaway vehicle",
    wide: true,
  },
];

export default function Photos() {
  return (
    <section id="photos" className="bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label text-red-400 mb-4 fade-in">
          Stills from Ring Footage
        </p>
        <h2
          className="text-5xl text-white mb-3 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Photos of the Perpetrators &amp; Vehicle
        </h2>
        <p className="text-slate-400 mb-12 fade-up">
          If you recognize any of these individuals or the vehicle, contact
          Jesse at{" "}
          <a href="tel:8144069539" className="text-red-400 underline">
            (814) 406-9539
          </a>{" "}
          or the Monrovia Police Department.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`photo-card rounded-2xl overflow-hidden bg-slate-800 shadow-lg fade-up delay-${(i % 3) + 1}${photo.wide ? " sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <p
                  className={`text-xs ${photo.labelColor} font-bold uppercase tracking-wider mb-1`}
                >
                  {photo.label}
                </p>
                <p className="text-sm text-slate-200 font-medium leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
