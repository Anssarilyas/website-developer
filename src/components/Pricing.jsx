import { useScrollReveal } from '../hooks';

const plans = [
  {
    name: 'Pack Starter',
    price: '2500',
    badge: 'Pack Starter',
    badgeColor: 'bg-gray-700',
    features: ['5 Pages Web', 'Site web dynamique', 'Site adapté a tous les écrans', 'Page des services', 'Nom de Domaine 1 an', 'Hébergement 1 an', 'Page de contact', 'Intégration réseaux sociaux', 'Intégration sur Google Maps'],
    cta: 'Choisir ce Pack',
    cardBg: 'bg-white',
    highlighted: false,
  },
  {
    name: 'Pack eCommerce',
    price: '3900',
    badge: 'Pack eCommerce',
    badgeColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
    features: ['Boutique en ligne dynamique', "Page d'accueil avec produits", 'Boutique adapté a tous les écrans', 'Intégration de 30 Produits', 'Nom de Domaine 1 an', 'Hébergement 1 an', 'Page de contact', 'Intégration réseaux sociaux', 'Inclusion de Google Maps'],
    cta: 'Choisir ce Pack',
    cardBg: 'bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600',
    highlighted: true,
  },
  {
    name: 'Pack Premium',
    price: '6000',
    badge: 'Pack Premium',
    badgeColor: 'bg-green-600',
    features: ['10 Pages Web maximum', 'Site web dynamique', 'Site adapté a tous les écrans', 'Page des services', 'Nom de Domaine 1 an', 'Hébergement 1 an', 'Page de contact', 'Intégration réseaux sociaux', 'Inclusion de Google Maps'],
    cta: 'Choisir ce Pack',
    cardBg: 'bg-white',
    highlighted: false,
  },
];

export default function Pricing() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block border border-orange rounded-full px-6 py-2 text-sm font-semibold text-navy mb-4">
            ✦ Nos Packs Création Sites Web ✦
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Des solutions simples et<br/>complètes pour créer votre site
          </h2>
          <p className="text-xl text-gray-400">web selon vos besoins.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 transition-all duration-700 ${plan.highlighted ? `${plan.cardBg} text-white md:scale-105 shadow-2xl` : `${plan.cardBg} border border-gray-200 shadow-lg`} ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Badge */}
              <div className={`inline-block ${plan.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider`}>{plan.badge}</div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-navy'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-400'} mb-2`}>Dhs</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#contact" className={`block text-center py-4 px-6 rounded-full font-semibold text-sm transition-all duration-300 no-underline ${plan.highlighted ? 'bg-white text-navy hover:bg-gray-100' : 'btn-orange w-full justify-center'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
