// src/app/services/cybersecurity-training/page.tsx

export const metadata = {
  title: 'Cybersecurity Training - Spot Tech',
  description:
    'Hands-on cybersecurity awareness and training programs: workshops, phishing simulations, incident response, and customized sessions to build a strong security culture in your organization.',
};

export default function CybersecurityTrainingPage() {
  return (
    <>
      {/* Hero Section - Modern training/awareness theme */}
      <section
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-blue-300 drop-shadow-lg">
            Cybersecurity Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Empower your team with practical knowledge and skills to recognize, prevent, and respond to cyber threats effectively.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Build Your Security Culture →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Turn Employees into Your First Line of Defense
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Human error remains one of the biggest cybersecurity risks. Our training programs go beyond basic awareness — delivering interactive, scenario-based learning that changes behavior and builds lasting security habits.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From general staff to executives and IT teams, we customize content to your industry, risk profile, and compliance needs (e.g., GDPR, ISO 27001 awareness requirements).
          </p>
        </section>

        {/* Key Training Offerings */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our Cybersecurity Training Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Security Awareness Workshops',
                desc: 'Interactive sessions covering phishing, password hygiene, safe browsing, data handling, and emerging threats — tailored for all employees.',
              },
              {
                title: 'Phishing Simulation Exercises',
                desc: 'Realistic phishing campaigns with immediate feedback, reporting metrics, and follow-up training to measure and improve resilience.',
              },
              {
                title: 'Incident Response Training',
                desc: 'Tabletop exercises and simulations for IT/security teams to practice detecting, containing, and recovering from breaches efficiently.',
              },
              {
                title: 'Customized Training Programs',
                desc: 'Role-specific modules (executives, developers, HR, finance) or compliance-focused sessions (GDPR, PCI-DSS, insider threats).',
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
            Why Spot Tech Training?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-semibold mb-3">Practical & Engaging</h4>
              <p className="text-gray-400">Hands-on simulations and real-world scenarios — not boring slideshows.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📈</div>
              <h4 className="text-xl font-semibold mb-3">Measurable Results</h4>
              <p className="text-gray-400">Pre/post assessments, phishing click rates, and progress tracking reports.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-3">Custom & Scalable</h4>
              <p className="text-gray-400">From small teams to enterprise-wide rollouts, in-person or virtual.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Empower Your Team Against Threats
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Reduce human-related risks with training that sticks. Let's design a program for your organization.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Schedule a Training Demo
          </a>
        </section>
      </main>
    </>
  );
}