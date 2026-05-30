export default function Home() {
  const faqs = [
    {
      q: 'What does the scanner check?',
      a: 'It checks for missing consent checkboxes, absent privacy policy links, unclear data collection disclosures, and non-compliant form field labeling against GDPR Article 7 and 13 requirements.'
    },
    {
      q: 'How quickly do I get results?',
      a: 'Most scans complete in under 60 seconds. You receive a detailed compliance report with a severity score and step-by-step fix recommendations for each issue found.'
    },
    {
      q: 'Do I need technical knowledge to use it?',
      a: 'No. Just paste your website URL and the scanner does the rest. Reports are written in plain language so anyone on your team can act on them immediately.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          GDPR Compliance
        </span>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          Scan Your Forms for<br />
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically detect missing consent mechanisms, data collection issues, and privacy policy gaps in your website forms. Get actionable fixes in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for first scan preview</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', label: 'Deep Form Crawl', desc: 'Scans every form field and attribute' },
          { icon: '⚖️', label: 'GDPR Rule Engine', desc: 'Checks 20+ compliance rules' },
          { icon: '📋', label: 'Fix Reports', desc: 'Plain-language remediation steps' }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited URL scans',
              '20+ GDPR compliance checks',
              'Detailed PDF reports',
              'Priority email support',
              'Re-scan after fixes'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} GDPR Form Compliance Scanner. All rights reserved.
      </footer>
    </main>
  )
}
