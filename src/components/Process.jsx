import { useScrollReveal } from '../hooks';

const steps = [
  {
    num: 1,
    title: 'Définition du Projet',
    desc: 'Compréhension de vos besoins, choix du style et organisation du contenu.',
    bg: 'bg-blue-50',
  },
  {
    num: 2,
    title: 'Conception du Site',
    desc: "Design sur-mesure et développement complet d'un site moderne et performant.",
    bg: 'bg-yellow-50',
  },
  {
    num: 3,
    title: 'Lancement & Optimisation',
    desc: 'Mise en ligne, tests finaux et optimisation pour garantir une performance maximale.',
    bg: 'bg-purple-50',
  },
];

export default function Process() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-orange-50 via-white to-green-50 relative" ref={ref}>
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="section-label">PROCESSUS DE CRÉATION DE SITE WEB</div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Découvrez les étapes essentielles<br/>qui transforment{' '}
            <span className="italic-accent">votre idée en un site<br/>web professionnel et efficace.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
              {/* Number connector */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-xl border-2 border-gray-300 flex items-center justify-center text-lg font-bold text-navy">{step.num}</div>
                {i < steps.length - 1 && <div className="hidden md:block w-full h-px bg-gray-300 mx-4" />}
              </div>
              {/* Card */}
              <div className={`${step.bg} rounded-3xl p-8 text-center min-h-[200px] flex flex-col items-center justify-center`}>
                <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
