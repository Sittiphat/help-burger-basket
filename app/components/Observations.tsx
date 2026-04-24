const observations = [
  {
    title: "At least 30 minutes of patient pre-entry surveillance.",
    body: "Ring footage shows the scout in the white hat outside the bathroom window at 4:54 PM. The group did not enter until after 5:22 PM. This level of patience — over 30 minutes — is not typical of opportunistic crime. The crew waited long enough to be confident the home would stay empty.",
  },
  {
    title: "Coordinated multi-role operation with at least four distinct participants.",
    body: "Video evidence confirms: (1) a scout in a white hat who surveilled the exterior beforehand, (2) at least two masked perpetrators who ransacked the interior simultaneously, and (3) a dedicated getaway driver who stayed parked in the Nissan Rogue outside the entire time. A mysterious fourth party — a woman — was on speakerphone with two suspects inside. Her role (lookout, coordinator, or other) is unknown.",
  },
  {
    title: "Gloves worn throughout — came prepared to leave no trace.",
    body: "Interior Ring footage clearly shows at least one perpetrator wearing bright red gloves while ransacking the living room. This was a deliberate choice to avoid fingerprint evidence and rules out any improvised or opportunistic crime.",
  },
  {
    title: "Stolen license plates sourced before arriving.",
    body: "The Nissan Rogue was already fitted with stolen plate 9FIDO94 when it arrived on scene. This required a separate, prior criminal act — sourcing a stolen plate — and confirms the burglary was planned well in advance, not impulsive.",
  },
  {
    title: "Camera awareness — hallway camera appears deliberately blocked.",
    body: "At 5:28 PM, the hallway Ring camera view becomes obstructed. The abrupt angle change suggests a suspect noticed and moved or covered the camera. This shows awareness of Ring cameras, consistent with a crew that has done this before.",
  },
  {
    title: "Targeted the room with the most visible valuables.",
    body: "The $140,000 was stored in a lockbox inside the master bedroom, in close proximity to other valuables and jewelry. The burglars' decision to concentrate their efforts on the room most likely to contain high-value items — rather than indiscriminately ransacking the first space — along with the speed and efficiency of their search, suggests experience and intent. This raises the possibility that they had prior knowledge of the home's layout, potentially through surveillance or someone with proximity to the family. The home's close proximity to Burger Basket increases the likelihood that the location was specifically targeted in advance.",
  },
  {
    title: "Spanish-language audio captured on multiple Ring clips.",
    body: "Several Ring recordings contain audible Spanish-language speech, likely from the perpetrators. The content of these conversations could contain critical information — meeting points, names, instructions. Community members who speak Spanish are strongly encouraged to listen and transcribe in the Community Forum.",
    forumLink: true,
  },
  {
    title: "3 family dogs were present.",
    body: "At first, they barked at the scout and reacted defensively when the two masked men emerged from the bathroom. The intruders attempted to calm the dogs by repeatedly opening the door and speaking to them in a gentle tone. Winchester (the smaller black dog) showed the strongest defensive reaction, while Lucky (the white Husky) barked mostly out of fear. Happy (the German Shepherd) remained the most composed. Because of this, the burglars physically moved Winchester and Lucky into another room while leaving Happy where he was.",
  },
];

export default function Observations() {
  return (
    <section id="observations" className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label text-red-400 mb-4 fade-in">
          Frame-by-Frame Analysis
        </p>
        <h2
          className="text-5xl text-white mb-3 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Interesting Observations
        </h2>
        <p className="text-slate-400 mb-4 fade-up">
          Observations drawn from frame-by-frame analysis of the Ring camera
          footage and still images. Analysis performed by Claude AI and the
          community. Contribute to the discussion forum below so that more clues
          can be added.
        </p>
        <div className="bg-amber-950/60 border border-amber-800/50 p-4 rounded-2xl mb-10 text-sm fade-up">
          <strong className="text-amber-400">Note:</strong>
          <span className="text-amber-200">
            {" "}
            These are analytical observations only — not verified conclusions.
            If you notice something additional, share it in the{" "}
          </span>
          <a
            href="https://github.com/Sittiphat/help-burger-basket/discussions"
            target="_blank"
            rel="noopener"
            className="underline text-amber-300"
          >
            Community Forum
          </a>
          <span className="text-amber-200"> or contact </span>
          <a href="tel:8144069539" className="underline text-amber-300">
            Jesse at (814) 406-9539
          </a>
          <span className="text-amber-200">
            {" "}
            or the Monrovia Police Department.
          </span>
        </div>
        <ul className="space-y-4">
          {observations.map((obs) => (
            <li
              key={obs.title}
              className="flex gap-4 bg-slate-800/60 border border-slate-700 rounded-2xl p-5 fade-up"
            >
              <i className="fa-solid fa-magnifying-glass text-red-400 mt-1 text-lg flex-shrink-0"></i>
              <p className="text-slate-300">
                <strong className="text-white">{obs.title}</strong> {obs.body}
                {obs.forumLink && (
                  <>
                    {" "}
                    <a
                      href="https://github.com/Sittiphat/help-burger-basket/discussions"
                      target="_blank"
                      rel="noopener"
                      className="underline text-red-400"
                    >
                      Community Forum
                    </a>
                    .
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
