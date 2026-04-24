"use client";

import { useEffect, useState } from "react";

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function fetchComments() {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      if (data.comments) setComments(data.comments);
    } catch {
      // silently fail on load
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, content }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setName("");
        setContent("");
        setSuccess(true);
        fetchComments();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="comments" className="bg-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label mb-3 fade-in">Community</p>
        <h2
          className="text-5xl text-slate-900 mb-4 fade-up"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Leave a Message
        </h2>
        <p className="text-slate-500 mb-10 fade-up">
          Share your support, tips, or information with the family and community.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-10 fade-up"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              placeholder="e.g. Jane from Monrovia"
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Message
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={2000}
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition resize-none"
              required
            />
            <p className="text-xs text-slate-400 text-right mt-1">{content.length}/2000</p>
          </div>

          {error && (
            <p className="text-red-600 text-sm mb-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-700 text-sm mb-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
              Your message has been posted. Thank you for your support.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-full transition-colors"
          >
            {submitting ? "Posting..." : "Post Message"}
          </button>
        </form>

        {/* Comments list */}
        {loading ? (
          <p className="text-slate-400 text-center py-8">Loading messages...</p>
        ) : comments.length === 0 ? (
          <p className="text-slate-400 text-center py-8">
            No messages yet — be the first to show your support.
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{c.name}</p>
                    <p className="text-xs text-slate-400">{formatDate(c.createdAt)}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{c.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
