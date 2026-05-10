import { useState } from 'react';
import { useScrollReveal } from '../hooks';

const categories = ['All', 'Websites', 'Logos', 'Branding', 'E-commerce'];

const projects = [
  {
    title: 'TechFlow SaaS Platform',
    category: 'Websites',
    desc: 'A modern SaaS dashboard for analytics',
    color: 'from-[#0066FF] to-[#6633FF]',
  },
  {
    title: 'Luxe Fashion Brand',
    category: 'Logos',
    desc: 'Minimalist luxury fashion logo design',
    color: 'from-[#FF6633] to-[#FF3366]',
  },
  {
    title: 'GreenLeaf Organics',
    category: 'Branding',
    desc: 'Complete brand identity for organic food company',
    color: 'from-[#00CC88] to-[#00AAFF]',
  },
  {
    title: 'Urban Threads Store',
    category: 'E-commerce',
    desc: 'Full e-commerce platform for streetwear',
    color: 'from-[#AA33FF] to-[#FF33AA]',
  },
  {
    title: 'FinanceHub Dashboard',
    category: 'Websites',
    desc: 'Financial analytics web application',
    color: 'from-[#0044CC] to-[#00D4FF]',
  },
  {
    title: 'Artisan Coffee Co.',
    category: 'Logos',
    desc: 'Artisan coffee brand logo and packaging',
    color: 'from-[#CC8844] to-[#FF6644]',
  },
  {
    title: 'NovaTech Corporate',
    category: 'Branding',
    desc: 'Tech startup corporate identity suite',
    color: 'from-[#3366FF] to-[#33CCFF]',
  },
  {
    title: 'PetPal Marketplace',
    category: 'E-commerce',
    desc: 'Pet products marketplace with subscription',
    color: 'from-[#FF8800] to-[#FFCC00]',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [ref, isVisible] = useScrollReveal(0.05);

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D4FF] rounded-full opacity-[0.03] blur-[150px]" />

      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">
            Our Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our latest projects and see how we transform ideas into stunning digital experiences.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                active === cat
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white border-transparent shadow-lg shadow-[#0066FF]/25'
                  : 'bg-transparent text-[#8888AA] border-[#2A2A3A] hover:border-[#0066FF]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible ? 'animate-scaleIn' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Project Thumbnail */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative`}>
                {/* Mock content */}
                <div className="absolute inset-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-[#00D4FF] font-medium tracking-wider uppercase">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                  <p className="text-sm text-[#8888AA] mt-1">{project.desc}</p>
                  <div className="flex items-center gap-2 mt-3 text-[#0066FF]">
                    <span className="text-sm font-medium">View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
