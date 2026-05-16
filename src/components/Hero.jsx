import { useScrollReveal } from '../hooks';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-white via-white to-orange-50">
      {/* Decorative orange swoosh in top-right */}
      <div className="absolute top-0 right-0 w-[60%] h-[70%] pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="none">
            <path d="M400,0 C600,0 800,100 800,200 C800,350 650,400 500,350 C350,300 300,400 400,500 C500,600 700,550 800,600 L800,0 Z" fill="#E8772E" opacity="0.15"/>
            <path d="M500,0 C650,50 800,150 800,250 C800,400 600,350 500,300 C400,250 350,350 450,450 C550,550 750,500 800,550 L800,0 Z" fill="#F59E0B" opacity="0.1"/>
          </svg>
        </div>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            {/* Clients badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white shadow-md ${['bg-blue-400','bg-green-400','bg-purple-400','bg-orange-400'][i-1]}`}></div>
                ))}
                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold">+</div>
              </div>
              <p className="text-sm text-gray-600 leading-tight">Clients satisfaits<br/>et fidèles</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.1] mb-6">
              Création Site web à{' '}
              <span className="text-orange">Rabat</span> &{' '}
              <span className="italic-accent">Agence Marketing</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-lg">
              Agence digitale à Rabat spécialisée en création de site web, SEO et marketing digital, dédiée à développer votre présence en ligne et à faire croître votre marque.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-semibold">5+ ans d'expertise</span>
            </div>

            <a href="tel:0782587835" className="btn-orange text-base py-4 px-8">
              Appelez-nous
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* Right — Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <img src="/hero_businessman.png" alt="Expert en création de sites web" className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
