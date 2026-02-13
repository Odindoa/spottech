// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        <p className="mb-4">
          © {new Date().getFullYear()} Spot Tech. All rights reserved.
        </p>
        <p className="text-sm">
          Protecting your digital future with cutting-edge cybersecurity solutions.
        </p>
        {/* You can add social links, privacy policy, etc. later */}
      </div>
    </footer>
  );
}