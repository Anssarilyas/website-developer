import { useScrollReveal } from '../hooks';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We dive deep into understanding your business, goals, target audience, and competitors to create a solid strategy.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our designers create stunning mockups and prototypes that align with your brand vision and user expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Development',
    desc: 'We build your project using cutting-edge technologies, ensuring clean code, performance, and scalability.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'After thorough testing and optimization, we launch your project and provide ongoing support for success.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="process" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[150px]" />

      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">
            How We Work
          </span>
          <h2 className="section-title">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven 4-step workflow that ensures quality results and client satisfaction every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#0066FF]/20 via-[#0066FF]/40 to-[#0066FF]/20" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Step circle */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/5 border-2 border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] relative z-10 group-hover:border-[#0066FF]/50 transition-all duration-500">
                  {step.icon}
                </div>
                {/* Number badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center text-white text-xs font-bold z-20">
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#8888AA] leading-relaxed max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
