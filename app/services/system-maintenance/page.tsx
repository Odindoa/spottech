// src/app/services/system-maintenance/page.tsx

export const metadata = {
  title: 'System Maintenance - Spot Tech',
  description:
    'Ongoing system maintenance services: monitoring, security patching, performance optimization, bug fixes, and contract-based technical support to keep your applications stable and secure.',
};

export default function SystemMaintenancePage() {
  return (
    <>
      {/* Hero Section - Modern monitoring/maintenance theme */}
      <section
        className="relative bg-gray-950 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef0d7b9c7d1e?auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-blue-300 drop-shadow-lg">
            System Maintenance
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Keep your systems secure, stable, and performing at their best with proactive monitoring, timely updates, and dedicated support under clear contract terms.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Ensure Long-Term Stability →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Reliable Support for Long-Term Performance
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            After deployment, systems require continuous care to stay secure, efficient, and aligned with evolving threats and business needs. Our contractual maintenance services provide proactive monitoring, rapid issue resolution, security patching, and performance tuning — so you can focus on your core operations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We offer flexible SLA-based contracts with clear response times, regular reports, and priority support to minimize downtime and maintain compliance.
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our System Maintenance Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'System Monitoring & Performance Optimization',
                desc: '24/7 monitoring of uptime, resource usage, logs, and alerts — with proactive tuning to prevent slowdowns and bottlenecks.',
              },
              {
                title: 'Security Updates & Patching',
                desc: 'Timely application of OS, framework, library, and vulnerability patches to protect against known exploits and zero-days.',
              },
              {
                title: 'Bug Fixes & Issue Resolution',
                desc: 'Rapid diagnosis and fixing of functional bugs, errors, or regressions — with root-cause analysis and preventive measures.',
              },
              {
                title: 'Contract-Based Technical Support',
                desc: 'Dedicated support channels (email, phone, portal), defined SLAs, monthly/quarterly reports, and escalation paths for critical issues.',
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
            Why Spot Tech for Ongoing Maintenance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🕒</div>
              <h4 className="text-xl font-semibold mb-3">Proactive Care</h4>
              <p className="text-gray-400">Prevent issues before they impact users — not just react after problems occur.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🔐</div>
              <h4 className="text-xl font-semibold mb-3">Always Up-to-Date</h4>
              <p className="text-gray-400">Automatic security patching and version upgrades to stay protected against new threats.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📞</div>
              <h4 className="text-xl font-semibold mb-3">Reliable Support</h4>
              <p className="text-gray-400">Clear SLAs, priority response, and transparent reporting — peace of mind included.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Keep Your Systems Running Smoothly
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Protect your investment with professional, contract-based maintenance. Let's discuss a plan that fits your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Get a Maintenance Proposal
          </a>
        </section>
      </main>
    </>
  );
}