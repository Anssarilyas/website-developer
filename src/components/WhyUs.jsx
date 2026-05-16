import { useScrollReveal } from '../hooks';

export default function WhyUs() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const features = [
    {
      icon: '👥',
      title: 'Sites web professionnel & sur-mesure',
      desc: "Chaque site web bénéficie d'une conception graphique unique, adaptée à votre identité visuelle et aux attentes de votre audience.",
    },
    {
      icon: '⚡',
      title: 'Performance & Rapidité',
      desc: "Nos sites sont optimisés pour offrir une vitesse de chargement maximale et une expérience utilisateur fluide sur tous les appareils.",
    },
    {
      icon: '📈',
      title: 'Accompagnement & Suivi',
      desc: "Nous vous accompagnons à chaque étape, de la conception au lancement, avec un suivi régulier pour garantir vos résultats.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="section-label" style={{ justifyContent: 'flex-start' }}>
              <span>CRÉATION DE SITES WEB (SITES VITRINE & E-COMMERCE)</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Choisissez le <strong>service de création de sites web</strong> pour obtenir une plateforme moderne, rapide et optimisée, conçue pour renforcer votre image de marque, attirer plus de clients et soutenir la croissance de votre activité.
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-2 leading-tight">
              Pourquoi choisir nos experts{' '}
              <span className="italic-accent">Création Sites Web pour des résultats garantis..</span>
            </h2>

            <a href="tel:0782587835" className="btn-orange mt-8 inline-flex">
              Appelez-nous
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>

            {/* Feature cards */}
            <div className="mt-10 space-y-6">
              {features.map((f, i) => (
                <div key={i} className="card-light flex items-start gap-4 p-6"
                  style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="text-base font-bold text-navy mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Mockup images */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="relative">
              <img src="/website_mockups.png" alt="Exemples de sites web créés" className="w-full rounded-2xl shadow-2xl" />
              {/* Rating badge */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★</span>
                <div>
                  <p className="text-lg font-bold text-navy">4.9</p>
                  <p className="text-xs text-gray-400">High-Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
