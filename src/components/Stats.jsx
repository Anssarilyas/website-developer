import { useScrollReveal, useCountUp } from '../hooks';

export default function Stats() {
  const [ref, isVisible] = useScrollReveal(0.2);
  const sitesCount = useCountUp(172, 2000, isVisible);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative" ref={ref}>
      <div className="section-container">
        <div className={`flex flex-col items-center justify-center transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Big circle stat */}
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-orange/20 flex flex-col items-center justify-center relative">
            <p className="text-lg font-semibold text-navy mb-2">Sites web Créés</p>
            <p className="text-7xl md:text-8xl font-black text-navy">{sitesCount}+</p>
          </div>
          <p className="mt-8 text-gray-600 text-center max-w-lg">
            Création des sites web modernes, rapides et optimisés pour booster la présence en ligne des entreprises.
          </p>
        </div>
      </div>
    </section>
  );
}
