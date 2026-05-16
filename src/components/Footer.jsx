export default function Footer() {
  const year = new Date().getFullYear();
  const links = ['Accueil', 'Nos Tariffs', 'Nos Services', 'Contactez-nous'];

  return (
    <footer className="bg-navy pt-16 pb-6 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="#1a5276" opacity="0.8"/>
                  <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#2980b9" opacity="0.9"/>
                  <path d="M20 14 L26 20 L20 26 L14 20 Z" fill="#3498db"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold text-white tracking-wider uppercase leading-tight">CRÉATION SITE WEB</p>
                <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">RABAT.COM</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 relative inline-block">
              Liens Utiles
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange"></span>
            </h4>
            <ul className="space-y-3 list-none p-0 mt-4">
              {links.map(item => (
                <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-orange transition-colors no-underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Rocket image */}
          <div className="flex items-center justify-center">
            <img src="/rocket.png" alt="Rocket" className="w-40 h-40 object-contain animate-float" />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">© {year} Création Sites Web Rabat</p>
        </div>
      </div>
    </footer>
  );
}
