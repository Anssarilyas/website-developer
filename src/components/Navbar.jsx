import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'Nos Tariffs', href: '#pricing' },
    { label: 'Nos Services', href: '#services' },
    { label: 'Contactez-nous', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="#1a5276" opacity="0.8"/>
              <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#2980b9" opacity="0.9"/>
              <path d="M20 14 L26 20 L20 26 L14 20 Z" fill="#3498db"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-navy tracking-wider uppercase leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>CRÉATION SITE WEB</span>
            <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">RABAT.COM</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-semibold text-navy hover:text-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Appelez-nous:</span>
            <a href="tel:0782587835" className="font-bold text-navy text-base no-underline">07 82 58 78 35</a>
            <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
              <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="btn-orange text-sm py-3 px-6">
            Devis Gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}>
        <div className="section-container flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-base font-semibold text-navy hover:text-orange transition-colors duration-300 no-underline py-2">
              {link.label}
            </a>
          ))}
          <a href="tel:0782587835" className="text-navy font-bold no-underline">📞 07 82 58 78 35</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="btn-orange text-sm py-3 px-6 text-center">Devis Gratuit</a>
        </div>
      </div>
    </nav>
  );
}
