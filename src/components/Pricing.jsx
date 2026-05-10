import { useScrollReveal } from '../hooks';

const plans = [
  {
    name: 'Starter',
    price: '499',
    desc: 'Perfect for small businesses and startups.',
    badge: null,
    features: ['Single Page Website','Responsive Design','Basic SEO Setup','Contact Form','3 Revisions','1 Month Support'],
    excluded: ['Custom Animations','E-commerce Features','Priority Support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '999',
    desc: 'Ideal for growing businesses needing a comprehensive solution.',
    badge: 'Most Popular',
    features: ['Multi-Page Website (up to 7)','Custom UI/UX Design','Advanced SEO','Logo Design','Contact & Lead Forms','Social Media Integration','Custom Animations','5 Revisions','3 Months Support'],
    excluded: ['E-commerce Features'],
    cta: 'Choose Professional',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '1,999',
    desc: 'Complete digital solution with the best features.',
    badge: 'Best Value',
    features: ['Unlimited Pages','Premium UI/UX Design','Full SEO Package','Complete Brand Identity','E-commerce Integration','Admin Dashboard','Custom Animations','Blog System','Analytics Integration','Unlimited Revisions','6 Months Support','Priority Support'],
    excluded: [],
    cta: 'Go Premium',
    highlighted: false,
  },
];

export default function Pricing() {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <section id="pricing" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[150px]" />
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">Pricing Plans</span>
          <h2 className="section-title">Choose Your <span className="gradient-text">Plan</span></h2>
          <p className="section-subtitle mx-auto">Transparent pricing with no hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 transition-all duration-700 ${plan.highlighted ? 'bg-gradient-to-b from-[#0066FF]/10 to-[#12121A] border-2 border-[#0066FF]/40 md:scale-105 shadow-2xl shadow-[#0066FF]/10' : 'card'} ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
              {plan.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-xs font-bold uppercase tracking-wider">{plan.badge}</div>}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-[#8888AA] mb-6">{plan.desc}</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-1"><span className="text-sm text-[#8888AA]">$</span><span className="text-5xl font-black gradient-text">{plan.price}</span></div>
                <span className="text-sm text-[#8888AA]">per project</span>
              </div>
              <div className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-[#CCCCDD]">{f}</span>
                  </div>
                ))}
                {plan.excluded.map((f, j) => (
                  <div key={`x${j}`} className="flex items-center gap-3 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-[#2A2A3A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#8888AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <span className="text-sm text-[#8888AA] line-through">{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={`block text-center py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 no-underline ${plan.highlighted ? 'btn-primary w-full' : 'border-2 border-[#2A2A3A] text-white hover:border-[#0066FF] hover:text-[#0066FF]'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
