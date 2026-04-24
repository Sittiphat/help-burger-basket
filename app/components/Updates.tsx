"use client";

interface Update {
  date: string;
  time: string;
  title: string;
  content: string;
}

const updates: Update[] = [
  {
    date: "April 20, 2026",
    time: "9:00 AM PDT",
    title: "KNX Radio Interview",
    content:
      "Jesse joined KNX News Radio for a live interview about the burglary and the family's situation. The audio recording is now available in the TV & Radio Coverage section above.",
  },
  {
    date: "April 19, 2026",
    time: "10:00 AM PDT",
    title: "Website Launched",
    content:
      "The support website is now live with video evidence, perpetrator photos, and the full story. Still work in progress but the site will be updated shortly, so stay tuned. Please share widely — I do not want these individuals to hurt another family again.",
  },
  {
    date: "April 18, 2026",
    time: "1:00 PM PDT",
    title: "Burger Basket Looking for New Trainees",
    content:
      "In the absence of my father, my mom and Burger Basket are currently in the process of hiring and training new staff. Text (814) 406-9539 if you are interested in joining the team!",
  },
  {
    date: "April 18, 2026",
    time: "9:00 AM PDT",
    title: "Dad Still Hospitalized",
    content:
      "My father remains in the hospital receiving treatment for stress-induced illness. We are grateful for the continued community support and prayers. Burger Basket will remain closed for the time being.",
  },
  {
    date: "March 27, 2026",
    time: "5:30 PM PDT",
    title: "Incident Reported",
    content:
      "Burglary reported to Monrovia Police Department. Video evidence and descriptions shared with investigators.",
  },
];

export default function Updates() {
  const newest = updates[0];

  return (
    <section id="updates" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-baseline mb-4">
          <div>
            <p className="section-label mb-3 fade-in">Latest News</p>
            <h2
              className="text-5xl text-slate-900 fade-up"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Situation Updates
            </h2>
          </div>
          <p className="text-sm text-slate-400 hidden md:block">
            Last updated: {newest.date} at {newest.time}
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-10 text-sm fade-up mt-8">
          <strong className="text-amber-800">Note:</strong>
          <span className="text-amber-900">
            {" "}
            This website will be periodically updated with new information and
            additional video or photo evidence as it becomes available. All
            evidence has already been shared with the Monrovia Police
            Department.
          </span>
        </div>

        <div className="space-y-4">
          {updates.map((u) => (
            <div
              key={`${u.date}-${u.title}`}
              className="update-card bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                <i className="fa-solid fa-calendar-days"></i>
                <span>
                  {u.date} &bull; {u.time}
                </span>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-2">
                {u.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{u.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
