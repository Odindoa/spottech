// src/app/page.tsx
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center text-white py-20 md:py-32 px-4"
      >
        <div className="max-w-4xl mx-auto text-center hero-overlay p-6 md:p-10 rounded-lg bg-black/40 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-300">
            Protecting Your Digital Future
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            We offer cutting-edge cybersecurity solutions that shield your organization from evolving threats.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-300">
          Why Choose Spot Tech?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-3">24/7 Threat Monitoring</h4>
            <p className="text-gray-400">
              Our round-the-clock monitoring detects and neutralizes threats before they cause damage.
            </p>
          </div>
          {/* Repeat for the other two cards... copy-paste and adjust */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-3">Tailored Security</h4>
            <p className="text-gray-400">
              We customize cybersecurity strategies to fit your business size, industry, and risk profile.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-3">Trusted Experts</h4>
            <p className="text-gray-400">
              Our certified professionals have protected companies in finance, health, education, and government.
            </p>
          </div>
        </div>
      </section>

      {/* Services - add similarly */}
      {/* Our Work - add similarly */}
      {/* Call to Action - add similarly */}

      {/* For now, you can stop here or keep adding sections one by one */}
    </>
  );
}