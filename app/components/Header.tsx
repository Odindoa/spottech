'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    closeMenu();
    setIsServicesOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', hasDropdown: true },
    { href: '/work', label: 'Our Work' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceSubItems = [
    { href: '/services/penetration-testing', label: 'Penetration Testing' },
    { href: '/services/cloud-security', label: 'Cloud Security' },
    { href: '/services/risk-compliance', label: 'Risk & Compliance' },
    { href: '/services/cybersecurity-training', label: 'Cybersecurity Training' },
    { href: '/services/system-design-development', label: 'System Design & Development' },
    { href: '/services/system-maintenance', label: 'System Maintenance' },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="Spot Tech Logo"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
          <div className="h-10 border-l border-gray-400 hidden md:block" />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-blue-400">
              SPOT TECH
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-0.5 italic underline">
              Security on spot
            </p>
          </div>
        </Link>

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-10 relative">
  {navItems.map((item) => {
    if (!item.hasDropdown) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`
            relative text-base font-semibold tracking-wide transition-all duration-300
            ${isActive(item.href) ? 'text-blue-400 after:w-full' : 'text-gray-300 hover:text-blue-400'}
            after:content-[''] after:absolute after:left-0 after:bottom-[-6px] 
            after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
            ${isActive(item.href) ? '' : 'hover:after:w-full after:w-0'}
          `}
        >
          {item.label}
        </Link>
      );
    }

    // Services with improved hover dropdown
    return (
      <div
        key={item.href}
        className="relative group"  // ← 'group' is key for group-hover
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <Link
          href={item.href}
          className={`
            relative text-base font-semibold tracking-wide transition-all duration-300 flex items-center gap-1
            ${isActive(item.href) ? 'text-blue-400' : 'text-gray-300 group-hover:text-blue-400'}
          `}
        >
          {item.label}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        {/* Dropdown - now uses group-hover for reliability */}
        <div
          className={`
            absolute left-0 top-full mt-1 w-72 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl py-2 z-50
            opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          `}
        >
          {serviceSubItems.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={`
                block px-5 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition
                ${pathname === sub.href ? 'bg-gray-700 text-blue-400' : ''}
              `}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    );
  })}
</nav>
        {/* Hamburger Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`
          md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col items-center space-y-6 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`
                text-lg font-medium transition-colors duration-200 w-full text-center
                ${isActive(item.href) ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}