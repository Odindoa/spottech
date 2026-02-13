// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';          // This imports Tailwind + your custom styles
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Spot Tech - Your Cybersecurity Partner',
  description: 'Cutting-edge cybersecurity solutions to protect your organization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white font-sans antialiased">
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}