import { useScrollReveal, useCountUp } from '../hooks';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { value: 120, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { value: 5, suffix: '+', label: 'Years Experience', icon: '⏳' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[120px]" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="section-title mb-6">
              We're a Team of <span className="gradient-text">Creative Developers</span>
            </h2>
            <p className="text-[#8888AA] leading-relaxed mb-6">
              Founded with a passion for digital excellence, DevStudio has been transforming businesses 
              through innovative web solutions and stunning visual identities. We believe every brand 
              deserves a powerful digital presence that captivates audiences and drives growth.
            </p>
            <p className="text-[#8888AA] leading-relaxed mb-8">
              Our team combines technical expertise with creative vision to deliver websites and brand 
              identities that not only look exceptional but perform beyond expectations. From startups 
              to enterprises, we've helped businesses across industries achieve their digital goals.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Cutting-edge Technology',
                '100% Custom Solutions',
                'Dedicated Support Team',
                'Results-driven Approach',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#F0F0F5] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} isVisible={isVisible} delay={i * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="card text-center group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-[#8888AA] font-medium">{stat.label}</div>
    </div>
  );
}
