// src/app/services/system-design-development/page.tsx

export const metadata = {
  title: 'System Design & Development - Spot Tech',
  description:
    'Custom secure system design and development tailored to your business needs. Built with security best practices, delivered on time, with 6 months free technical support.',
};

export default function SystemDesignDevelopmentPage() {
  return (
    <>
      {/* Hero Section - Modern software architecture / dev theme */}
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
            System Design & Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Custom-built, secure systems engineered precisely for your business — delivered on schedule with built-in security and 6 months of free post-deployment support.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-full font-bold text-white text-lg shadow-xl transition transform hover:scale-105"
          >
            Discuss Your Custom Project →
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Introduction */}
        <section className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8">
            Build Secure, Tailored Systems That Last
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We specialize in designing and developing custom software solutions that fit your exact requirements — whether it's a full workflow platform, internal tool, or client-facing application. Security is embedded from the start (secure-by-design principles), ensuring robust, scalable, and maintainable systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Every project includes client training, comprehensive documentation, and **six months of free technical support** after go-live to guarantee smooth adoption and quick issue resolution.
          </p>
        </section>

        {/* Key Services */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-300 mb-12">
            Our System Design & Development Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Custom System Architecture & Design',
                desc: 'From requirements gathering to high-level and detailed design — we create scalable, secure architectures tailored to your business processes and future growth.',
              },
              {
                title: 'Secure Web & Application Development',
                desc: 'Full-stack development with modern frameworks, secure coding practices, input validation, authentication, and protection against OWASP Top 10 threats.',
              },
              {
                title: 'User Training & Documentation',
                desc: 'Comprehensive user manuals, admin guides, video tutorials, and hands-on training sessions to ensure your team can use and maintain the system confidently.',
              },
              {
                title: 'Post-Deployment Technical Support',
                desc: '6 months of priority bug fixes, performance tuning, security updates, and guidance — included at no extra cost to support successful rollout.',
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
            Why Spot Tech for Custom Development?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🛠️</div>
              <h4 className="text-xl font-semibold mb-3">Security-First Approach</h4>
              <p className="text-gray-400">Built-in secure coding, threat modeling, and regular security reviews from day one.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⏰</div>
              <h4 className="text-xl font-semibold mb-3">On-Time Delivery</h4>
              <p className="text-gray-400">Agile methodology with clear milestones and transparent progress tracking.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-3">Long-Term Partnership</h4>
              <p className="text-gray-400">6 months free support + optional ongoing maintenance to ensure lasting value.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 px-6 bg-blue-900/20 rounded-2xl border border-blue-700/30">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">
            Ready to Build Your Custom System?
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Share your vision — we'll design and deliver a secure, tailored solution with full support included.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full font-bold text-white text-xl shadow-2xl transition transform hover:scale-105"
          >
            Start Project Discussion
          </a>
        </section>
      </main>
    </>
  );
}