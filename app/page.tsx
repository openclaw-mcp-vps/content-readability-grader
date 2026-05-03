export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Educators &amp; Course Creators
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Grade Your Content&apos;s Readability
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly analyze text with Flesch-Kincaid, SMOG, and Gunning Fog algorithms. Get grade-level scores and actionable suggestions to match your audience.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Grading — $7/mo
        </a>
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm">
          <div className="bg-[#161b22] rounded-lg p-3">
            <div className="text-[#58a6ff] font-bold text-xl">3+</div>
            <div className="text-[#8b949e]">Algorithms</div>
          </div>
          <div className="bg-[#161b22] rounded-lg p-3">
            <div className="text-[#58a6ff] font-bold text-xl">K–16</div>
            <div className="text-[#8b949e]">Grade Range</div>
          </div>
          <div className="bg-[#161b22] rounded-lg p-3">
            <div className="text-[#58a6ff] font-bold text-xl">Instant</div>
            <div className="text-[#8b949e]">Results</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Flesch-Kincaid Grade Level",
              "SMOG Index scoring",
              "Gunning Fog Index",
              "Coleman-Liau Index",
              "Actionable improvement tips",
              "Unlimited analyses",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which readability algorithms are used?",
              a: "We use Flesch-Kincaid Grade Level, SMOG Index, Gunning Fog, and Coleman-Liau Index — the four most trusted algorithms in educational publishing.",
            },
            {
              q: "Who is this tool for?",
              a: "Course instructors, curriculum designers, and educational content creators who need to match their writing to a specific grade level or audience.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your Lemon Squeezy customer portal with no questions asked. Your access continues until the end of the billing period.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Content Readability Grader. All rights reserved.
      </footer>
    </main>
  );
}
