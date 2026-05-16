import { useState } from 'react';
import { useScrollReveal } from '../hooks';

const services = [
  {
    num: '01', title: 'CRÉATION SITES WEB',
    desc: 'Création de sites web modernes, rapides et optimisés pour renforcer votre présence en ligne et convertir davantage de clients.',
    img: '/service_web.png', color: 'from-orange-400 to-pink-500',
  },
  {
    num: '02', title: 'RÉFÉRENCEMENT NATUREL - SEO',
    desc: 'Un accompagnement SEO sur-mesure pour garantir une visibilité durable et des résultats mesurables sur les moteurs de recherche.',
    img: '/service_seo.png', color: 'from-purple-400 to-blue-500',
  },
  {
    num: '03', title: 'GOOGLE ADS',
    desc: 'Création et gestion de campagnes Google Ads performantes pour attirer des clients qualifiés et maximiser votre retour sur investissement.',
    img: '/service_ads.png', color: 'from-blue-400 to-cyan-500',
  },
  {
    num: '04', title: 'FACEBOOK ADS',
    desc: 'Des campagnes Facebook Ads ciblées pour générer plus de ventes, attirer de nouveaux clients et renforcer votre visibilité.',
    img: '/service_ads.png', color: 'from-pink-400 to-red-500',
  },
  {
    num: '05', title: 'MAINTENANCE SITE WEB',
    desc: 'Un service de maintenance Site web sur-mesure pour protéger votre site, améliorer ses performances et éviter toute interruption.',
    img: '/service_maintenance.png', color: 'from-purple-500 to-pink-500',
  },
];

export default function Services() {
  const [ref, isVisible] = useScrollReveal(0.05);
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="section-label" style={{ color: '#E8772E' }}>NOS SERVICES</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Nous transformons vos<br/>objectifs en . <span className="italic-accent">résultats concrets</span>
          </h2>
        </div>

        {/* Services Layout: Card left + List right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Active Service Card */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${services[active].color} p-1`}>
              <div className="bg-white rounded-3xl p-6">
                <div className="rounded-2xl overflow-hidden mb-6 h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <img src={services[active].img} alt={services[active].title} className="w-48 h-48 object-contain" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{services[active].desc}</p>
                <button className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer border-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Service List */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="space-y-1">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-5 px-4 border-b border-white/10 flex items-center gap-6 transition-all duration-300 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 ${active === i ? 'border-b-2 border-b-orange' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span className={`text-sm font-mono ${active === i ? 'text-orange' : 'text-white/40'}`}>{s.num}</span>
                  <span className={`text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider transition-all ${active === i ? 'text-white' : 'text-white/40'}`}>{s.title}</span>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-orange">
                Devis Gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
