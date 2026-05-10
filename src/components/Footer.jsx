export default function Footer() {
  const year = new Date().getFullYear();
  const links = {
    Services: ['Web Development','E-commerce','Logo Design','UI/UX Design','SEO','Branding'],
    Company: ['About Us','Portfolio','Process','Pricing','Blog','Careers'],
    Support: ['Contact','FAQ','Terms of Service','Privacy Policy'],
  };

  return (
    <footer className="pt-20 pb-8 border-t border-[#1A1A25] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#0066FF] rounded-full opacity-[0.02] blur-[100px]" />
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center font-bold text-lg text-white">D</div>
              <span className="text-xl font-bold text-white">Dev<span className="gradient-text">Studio</span></span>
            </div>
            <p className="text-sm text-[#8888AA] leading-relaxed mb-6 max-w-sm">We build powerful websites and unique brand identities for modern businesses. Let's create something amazing together.</p>
            <div className="flex items-center gap-4 mb-4">
              <a href="tel:0603385513" className="text-sm text-[#8888AA] hover:text-white transition-colors no-underline flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0603385513
              </a>
            </div>
            <a href="mailto:ilyaseanssar35@gmail.com" className="text-sm text-[#8888AA] hover:text-white transition-colors no-underline flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              ilyaseanssar35@gmail.com
            </a>
          </div>
          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3 list-none p-0">
                {items.map(item => (
                  <li key={item}><a href="#" className="text-sm text-[#8888AA] hover:text-[#0066FF] transition-colors no-underline">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom */}
        <div className="border-t border-[#1A1A25] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8888AA]">© {year} DevStudio. All rights reserved.</p>
          <div className="flex gap-3">
            {['Fb','Ig','Tw','Li'].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-lg bg-[#1A1A25] border border-[#2A2A3A] flex items-center justify-center text-[#8888AA] hover:text-[#0066FF] hover:border-[#0066FF]/30 transition-all no-underline text-xs font-bold">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
