// src/app/services/risk-compliance/page.tsx

export const metadata = {
  title: 'Risk & Compliance - Spot Tech',
  description:
    'Expert risk assessment, policy development, compliance audits, and framework implementation to help your organization meet GDPR, ISO 27001, SOC 2, and other regulatory standards.',
};

export default function RiskCompliancePage() {
  return (
    <>
      {/* Hero Section - Professional audit/compliance theme */}
      <section
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-blue-300 drop-shadow-lg">
            Risk & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Achieve and maintain regulatory compliance while proactively managing cyber risks with structured assessments and tailored governance frameworks.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Start Your Compliance Journey →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Turn Compliance into a Competitive Advantage
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Navigating complex regulations like GDPR, ISO 27001, SOC 2, PCI-DSS, and local data protection laws can be overwhelming. We simplify the process by conducting thorough risk assessments, developing robust policies, and implementing controls that not only meet requirements but also strengthen your overall security posture.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our approach reduces legal exposure, builds stakeholder trust, and prepares your organization for audits — all while aligning security with business objectives.
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our Risk & Compliance Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Risk Assessment & Management',
                desc: 'Identify, analyze, and prioritize cyber risks using frameworks like NIST CSF, FAIR, and ISO 31000 — with ongoing monitoring and treatment plans.',
              },
              {
                title: 'Policy & Procedure Development',
                desc: 'Create or refine information security policies, acceptable use guidelines, incident response plans, and data classification procedures tailored to your organization.',
              },
              {
                title: 'Compliance Audits',
                desc: 'Conduct gap analyses, internal audits, and readiness assessments for major standards, including evidence collection and mock audit support.',
              },
              {
                title: 'Security Framework Implementation',
                desc: 'Help design and roll out controls based on ISO 27001, NIST SP 800-53, CIS Controls, or custom hybrid frameworks — with phased implementation support.',
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
            Why Spot Tech for Risk & Compliance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h4 className="text-xl font-semibold mb-3">Regulatory Expertise</h4>
              <p className="text-gray-400">Deep knowledge of global and regional standards — GDPR, ISO, SOC 2, DORA, and more.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🛠️</div>
              <h4 className="text-xl font-semibold mb-3">Practical Implementation</h4>
              <p className="text-gray-400">Not just reports — we help you actually build and maintain compliant programs.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📉</div>
              <h4 className="text-xl font-semibold mb-3">Risk Reduction Focus</h4>
              <p className="text-gray-400">Prioritize fixes that matter most to your business and reduce real exposure.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Achieve Compliance with Confidence
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let us guide you through risk management and regulatory alignment — schedule a free initial consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Get a Free Compliance Gap Analysis
          </a>
        </section>
      </main>
    </>
  );
}