// src/app/services/penetration-testing/page.tsx

export const metadata = {
  title: 'Penetration Testing - Spot Tech',
  description:
    'Expert penetration testing services to identify and fix vulnerabilities before attackers do. Network, web app, wireless, and social engineering tests with actionable reports.',
};

export default function PenetrationTestingPage() {
  return (
    <>
      {/* Hero Section - Modern dark cybersecurity vibe */}
      <section
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555949963-aa79d0ebc8fb?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-blue-300 drop-shadow-lg">
            Penetration Testing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Proactive simulated attacks to uncover hidden weaknesses and strengthen your defenses before real threats strike.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Start Your Security Assessment →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Identify Vulnerabilities Before Attackers Do
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our certified penetration testers act as ethical hackers to simulate real-world attacks on your networks, applications, and people. We go beyond automated scans — delivering in-depth, manual testing and clear, prioritized remediation guidance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Protect your business, customers, and reputation with proactive security validation aligned with industry standards (OWASP, PTES, OSSTMM, NIST).
          </p>
        </section>

        {/* Key Services / Types */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our Penetration Testing Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Network Penetration Testing',
                desc: 'External & internal network assessments to find misconfigurations, weak authentication, and exploitable services.',
              },
              {
                title: 'Web Application Security Testing',
                desc: 'Deep analysis of websites and APIs for OWASP Top 10 vulnerabilities like SQL injection, XSS, insecure deserialization, and more.',
              },
              {
                title: 'Wireless Security Assessment',
                desc: 'Evaluate Wi-Fi networks for rogue access points, weak encryption, and client-side attacks.',
              },
              {
                title: 'Social Engineering Tests',
                desc: 'Phishing campaigns, vishing, physical security checks, and pretexting to test human vulnerabilities.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
              >
                <h4 className="text-xl font-semibold text-blue-300 mb-4">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits / Why Choose Us */}
        <section className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 md:p-16 border border-blue-900/30">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-10">
            Why Choose Spot Tech for Pen Testing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold mb-3">Certified Experts</h4>
              <p className="text-gray-400">CREST, OSCP, CEH certified testers with real-world experience.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-3">Actionable Reports</h4>
              <p className="text-gray-400">Executive summaries + technical details + prioritized fix roadmap.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🔄</div>
              <h4 className="text-xl font-semibold mb-3">Retest Included</h4>
              <p className="text-gray-400">Free verification after fixes to confirm vulnerabilities are resolved.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Ready to Test Your Defenses?
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Schedule a no-obligation discussion and get a tailored penetration testing proposal.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Request a Quote Today
          </a>
        </section>
      </main>
    </>
  );
}