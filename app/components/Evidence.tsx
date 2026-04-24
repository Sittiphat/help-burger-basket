const videos = [
  {
    time: "4:54 PM",
    camera: "Outside Apartment Walkway Cam",
    badge: "Scout",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260326_233100.mp4",
    desc: "The scout in a white hat approaches the bathroom window and violently knocks to check if anyone is home. The dogs react by barking loudly.",
  },
  {
    time: "4:55 PM",
    camera: "Outside Apartment Walkway Cam",
    badge: "Scout",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260326_233118.mp4",
    desc: "Scout now standing upright — the clearest view of his face and clothing. He violently knocks on the window to see if anyone is home. The dogs bark even louder.",
  },
  {
    time: "4:55 PM",
    camera: "Alternate Camera Angle",
    badge: "Scout",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260326_233118(1).mp4",
    desc: "A second Ring camera captures the same moment from a different angle, providing additional detail on the scout's appearance and the dogs' reaction inside.",
  },
  {
    time: "4:56 PM",
    camera: "Front Exterior Cam",
    badge: "Getaway Car",
    badgeClass: "bg-amber-900/60 text-amber-300",
    src: "/assets/videos/evidence/RingVideo_20260327_014221.mp4",
    desc: "The scout knocks one last time, then heads back to notify the getaway driver that the coast is clear. This angle supplies another view of his face as he walks away.",
  },
  {
    time: "5:13 PM",
    camera: "Outside Apartment Walkway Cam",
    badge: "Scout",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260327_013048.mp4",
    desc: "An individual is captured walking past the property — possibly a harmless neighbor. The crew has now been surveilling for nearly 20 minutes.",
  },
  {
    time: "5:15 PM",
    camera: "Outside Apartment Walkway Cam",
    badge: "Spanish Audio",
    badgeClass: "bg-blue-900/60 text-blue-300",
    src: "/assets/videos/evidence/RingVideo_20260327_013100.mp4",
    desc: "Continued exterior surveillance — to any passerby, this individual would appear to be a harmless neighbor. Spanish audio is clearly audible in this clip.",
  },
  {
    time: "5:22 PM",
    camera: "Front Exterior Cam",
    badge: "Stolen Plate",
    badgeClass: "bg-amber-900/60 text-amber-300",
    src: "/assets/videos/evidence/RingVideo_20260327_014327.mp4",
    desc: "The Nissan Rogue backs in to steal the resident's parking spot, then leaves and parks northbound to act as a lookout. Stolen license plate 9FIDO94 is clearly legible.",
  },
  {
    time: "5:25 PM",
    camera: "Hallway Cam",
    badge: "Interior",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260327_011303.mp4",
    desc: "Two masked burglars enter the house for the first time. Visibly distressed, the dogs bark — and the perpetrators use de-escalation tactics, speaking softly to them and repeatedly opening and closing the door.",
  },
  {
    time: "5:28 PM",
    camera: "Hallway Cam",
    badge: "Camera Blocked",
    badgeClass: "bg-slate-600/60 text-slate-300",
    src: "/assets/videos/evidence/RingVideo_20260327_011312.mp4",
    desc: "The suspects continue de-escalating the dogs. The hallway camera is then deliberately blocked — the abrupt angle change suggests a suspect noticed and covered it, consistent with an experienced crew.",
  },
  {
    time: "5:30 PM",
    camera: "Living Room Cam",
    badge: "Interior",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260327_011718.mp4",
    desc: "A perpetrator in navy clothing moves through the living room while the other locks Winchester, the smaller black dog, in another room. They briefly search that room then move to the master bedroom.",
  },
  {
    time: "5:32 PM",
    camera: "Living Room Cam",
    badge: "Red Gloves",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260326_203725.mp4",
    desc: "A perpetrator in bright red gloves carries the lockbox through the living room. Spanish audio is audible — a man on speakerphone, and a woman's voice in the background. Her role remains unknown.",
  },
  {
    time: "5:32 PM",
    camera: "Bedroom Cam",
    badge: "Interior",
    badgeClass: "bg-red-900/60 text-red-300",
    src: "/assets/videos/evidence/RingVideo_20260326_212055.mp4",
    desc: "Simultaneously in the bedroom — Lucky the white Husky is visible and distressed. A suspect tried to open the lockbox on-site but couldn't, and elected to carry it out whole — taking 30 years of savings with him.",
  },
  {
    time: "5:33 PM",
    camera: "Front Doorbell Cam",
    badge: "Departure",
    badgeClass: "bg-slate-600/60 text-slate-300",
    src: "/assets/videos/evidence/RingVideo_20260327_013646.mp4",
    desc: "Suspects depart through the front door. From first breaking in to exit, the entire burglary took only 7–10 minutes — a level of efficiency that points to a highly experienced crew.",
  },
];

export default function Evidence() {
  return (
    <section id="evidence" className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <p className="section-label mb-4 fade-in">Ring Home Security Cameras</p>
        <h2
          className="text-5xl mb-4 text-slate-900 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Security Camera Evidence
        </h2>
        <p className="text-slate-500 mb-5 leading-relaxed fade-up">
          All footage is from Ring home security cameras at the property, shared
          with the Monrovia Police Department. Listed in chronological order by
          Ring camera overlay timestamp.
        </p>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl mb-12 flex gap-3 fade-up">
          <i className="fa-solid fa-language text-blue-500 text-lg flex-shrink-0 mt-0.5"></i>
          <div className="text-sm text-blue-900">
            <strong>Spanish Audio Detected:</strong> Several Ring recordings
            contain Spanish-language audio from the perpetrators. If you can
            help transcribe, please share in the{" "}
            <a
              href="https://github.com/Sittiphat/help-burger-basket/discussions"
              target="_blank"
              rel="noopener"
              className="underline font-semibold"
            >
              Community Forum
            </a>{" "}
            — it may contain critical clues.
          </div>
        </div>

        {/* Walkthrough */}
        <div className="mb-14 fade-up">
          <div className="video-header rounded-t-2xl px-5 py-3 flex items-center gap-3">
            <i className="fa-solid fa-person-walking text-slate-400 text-sm"></i>
            <span className="text-white font-semibold text-sm tracking-wider uppercase">
              Crime Scene Walkthrough
            </span>
          </div>
          <video controls className="w-full bg-black" style={{ display: "block" }}>
            <source
              src="/assets/videos/walkthrough/IMG_8174.MOV"
              type="video/quicktime"
            />
            <source
              src="/assets/videos/walkthrough/IMG_8174.MOV"
              type="video/mp4"
            />
          </video>
          <div className="border border-t-0 border-slate-200 rounded-b-2xl px-5 py-4 bg-slate-50">
            <p className="text-sm text-slate-500 leading-relaxed">
              Filmed after the incident — shows the opened bathroom window used
              as the point of entry.
            </p>
          </div>
        </div>

        <p className="section-label mb-8 fade-in">
          Ring Camera Recordings — Chronological Order
        </p>
        <div className="space-y-6">
          {videos.map((v) => (
            <div
              key={`${v.time}-${v.camera}`}
              className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 fade-up"
            >
              <div className="video-header px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-video text-red-400 text-xs"></i>
                  <span className="text-white font-bold text-sm">{v.time}</span>
                  <span className="text-slate-400 text-xs">{v.camera}</span>
                </div>
                <span
                  className={`${v.badgeClass} text-xs font-semibold px-2 py-0.5 rounded-md`}
                >
                  {v.badge}
                </span>
              </div>
              <video
                controls
                className="w-full bg-black"
                style={{ display: "block" }}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="px-5 py-4 bg-white">
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
