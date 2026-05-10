import { useScrollReveal } from '../hooks';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF] rounded-full opacity-[0.07] blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D4FF] rounded-full opacity-[0.05] blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0044CC] rounded-full opacity-[0.04] blur-[150px]" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 border-2 border-[#0066FF]/30 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-[15%] w-3 h-3 bg-[#00D4FF]/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-32 right-[20%] w-5 h-5 border-2 border-[#0066FF]/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[10%] w-2 h-8 bg-gradient-to-b from-[#0066FF]/20 to-transparent rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 text-sm">
            <span className="w-2 h-2 bg-[#00CC88] rounded-full animate-pulse" />
            <span className="text-[#8888AA]">Available for New Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 max-w-5xl mx-auto">
            We Build{' '}
            <span className="gradient-text">Powerful Websites</span>
            <br />
            & Unique{' '}
            <span className="gradient-text">Brand Identities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#8888AA] max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional web development, logo design, and digital solutions 
            for modern businesses. We transform your vision into digital reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="btn-primary text-base py-4 px-8 rounded-xl flex items-center gap-3 no-underline">
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline text-base py-4 px-8 rounded-xl flex items-center gap-3 no-underline">
              <span>View Portfolio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[#8888AA]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#8888AA] tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
