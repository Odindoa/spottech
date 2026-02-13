// src/app/services/cloud-security/page.tsx

export const metadata = {
  title: 'Cloud Security - Spot Tech',
  description:
    'Secure your cloud environments with expert configuration reviews, IAM management, encryption, and compliance audits for AWS, Azure, Google Cloud, and hybrid setups.',
};

export default function CloudSecurityPage() {
  return (
    <>
      {/* Hero Section - Modern cloud + lock theme */}
      <section
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555949963-aa79d0ebc8fb?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-blue-300 drop-shadow-lg">
            Cloud Security
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Safeguard your cloud infrastructure, data, and workloads with enterprise-grade protection and compliance in AWS, Azure, GCP, and hybrid environments.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Secure Your Cloud Today →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Protect What Matters Most in the Cloud
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As organizations move to the cloud, new attack surfaces emerge. We help secure multi-cloud and hybrid setups by identifying misconfigurations, enforcing least-privilege access, encrypting data at rest and in transit, and ensuring continuous compliance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our services reduce risk, prevent breaches, and maintain availability — all while supporting your business growth and regulatory obligations (GDPR, ISO 27001, SOC 2, PCI-DSS, etc.).
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our Cloud Security Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cloud Configuration Review',
                desc: 'Comprehensive audits of your cloud setup to detect insecure permissions, open ports, exposed storage buckets, and other common misconfigurations.',
              },
              {
                title: 'Identity and Access Management (IAM)',
                desc: 'Implement and optimize role-based access, multi-factor authentication, privileged access management, and just-in-time access controls.',
              },
              {
                title: 'Data Encryption Strategies',
                desc: 'Design and deploy encryption for data at rest, in transit, and in use — including key management with KMS, HSM, and customer-managed keys.',
              },
              {
                title: 'Compliance & Governance Audits',
                desc: 'Prepare for and maintain compliance with global standards through automated monitoring, policy enforcement, logging, and audit-ready reporting.',
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
            Why Spot Tech for Cloud Security?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">☁️🔒</div>
              <h4 className="text-xl font-semibold mb-3">Multi-Cloud Expertise</h4>
              <p className="text-gray-400">Deep experience securing AWS, Azure, Google Cloud, and hybrid environments.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-3">Continuous Monitoring</h4>
              <p className="text-gray-400">Real-time threat detection and automated remediation recommendations.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📜</div>
              <h4 className="text-xl font-semibold mb-3">Compliance Ready</h4>
              <p className="text-gray-400">Built-in support for audits and certifications with detailed evidence collection.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Secure Your Cloud Journey
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Get a free cloud security posture assessment and customized protection plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Book a Free Assessment
          </a>
        </section>
      </main>
    </>
  );
}