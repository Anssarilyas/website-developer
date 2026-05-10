import { useScrollReveal } from '../hooks';

const posts = [
  { title: 'Top 10 Web Design Trends for 2026', cat: 'Design', date: 'May 5, 2026', read: '5 min read', color: 'from-[#0066FF] to-[#00D4FF]', desc: 'Discover the latest web design trends that are shaping the digital landscape this year.' },
  { title: 'Why Your Business Needs a Professional Logo', cat: 'Branding', date: 'Apr 28, 2026', read: '4 min read', color: 'from-[#AA33FF] to-[#FF33AA]', desc: 'Learn how a professional logo can transform your brand identity and attract customers.' },
  { title: 'The Complete Guide to SEO in 2026', cat: 'Marketing', date: 'Apr 15, 2026', read: '7 min read', color: 'from-[#00CC88] to-[#00AAFF]', desc: 'Everything you need to know about SEO strategies that actually work in 2026.' },
];

export default function Blog() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="blog" className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">Latest Insights</span>
          <h2 className="section-title">From Our <span className="gradient-text">Blog</span></h2>
          <p className="section-subtitle mx-auto">Stay updated with the latest trends, tips, and insights from our team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className={`card group cursor-pointer overflow-hidden p-0 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className={`h-48 bg-gradient-to-br ${post.color} relative flex items-center justify-center`}>
                <div className="text-white/30 text-6xl font-black">{post.cat[0]}</div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium">{post.cat}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#8888AA] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.read}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">{post.title}</h3>
                <p className="text-sm text-[#8888AA] leading-relaxed mb-4">{post.desc}</p>
                <div className="flex items-center gap-2 text-[#0066FF] text-sm font-medium">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
