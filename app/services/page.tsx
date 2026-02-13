// src/app/services/page.tsx

export const metadata = {
  title: 'Our Services - Spot Tech',
  description:
    'Discover Spot Tech\'s comprehensive cybersecurity services: penetration testing, cloud security, risk & compliance, training, custom system development, and ongoing maintenance.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Penetration Testing',
      slug: 'penetration-testing',
      shortDesc:
        'Controlled cyber-attacks to identify vulnerabilities before real threats exploit them.',
      details: [
        'Network & Web Application Testing',
        'Wireless & Social Engineering Assessments',
        'Detailed Remediation Reports',
      ],
    },
    {
      title: 'Cloud Security',
      slug: 'cloud-security',
      shortDesc:
        'Protect your cloud infrastructure with expert configuration, encryption, and compliance.',
      details: [
        'Cloud Configuration & IAM Review',
        'Data Encryption Strategies',
        'Compliance & Governance Audits',
      ],
    },
    {
      title: 'Risk & Compliance',
      slug: 'risk-compliance',
      shortDesc:
        'Align your organization with GDPR, ISO 27001, and other security standards.',
      details: [
        'Risk Assessment & Management',
        'Policy Development',
        'Security Framework Implementation',
      ],
    },
    {
      title: 'Cybersecurity Training',
      slug: 'cybersecurity-training',
      shortDesc:
        'Hands-on training to build a strong security-aware culture in your team.',
      details: [
        'Awareness Workshops',
        'Phishing Simulations',
        'Incident Response Training',
      ],
    },
    {
      title: 'System Design & Development',
      slug: 'system-design-development',
      shortDesc:
        'Custom, secure systems built to your exact needs with 6 months free support.',
      details: [
        'Secure Architecture & Development',
        'User Training & Documentation',
        'Post-Deployment Support',
      ],
    },
    {
      title: 'System Maintenance',
      slug: 'system-maintenance',
      shortDesc:
        'Ongoing monitoring, updates, and support to keep systems secure and stable.',
      details: [
        'Performance Optimization',
        'Security Patching & Bug Fixes',
        'Contract-Based Technical Support',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center text-white py-28 px-4"
      >
        <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-black/50 p-10 rounded-lg">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-300 leading-tight">
            Comprehensive Cybersecurity Services
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            We deliver tailored, cutting-edge solutions to protect your organization from evolving digital threats — from proactive testing and secure development to ongoing maintenance and team empowerment.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold text-white shadow-lg transition inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Overview & Teaser Cards */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Tailored Protection for Every Need
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you're safeguarding cloud environments, training your team, or building secure custom systems, our services are designed to reduce risk and give you peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/40 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-blue-300 mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.shortDesc}</p>
                <ul className="text-gray-400 text-sm space-y-1.5">
                  {service.details.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={`/services/${service.slug}`}
                  className="block text-center bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 font-medium py-3 rounded-lg transition"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <section className="mt-20 text-center bg-blue-600/10 border border-blue-500/30 rounded-xl p-12">
          <h3 className="text-3xl font-bold text-blue-300 mb-4">
            Ready to Strengthen Your Security?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you build a robust defense strategy tailored to your business.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-bold text-white shadow-lg transition inline-block"
          >
            Get a Free Consultation
          </a>
        </section>
      </main>
    </>
  );
}