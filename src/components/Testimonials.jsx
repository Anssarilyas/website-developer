import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    text: 'DevStudio transformed our online presence completely. The website they built exceeded all expectations — modern, fast, and user-friendly. Our conversions increased by 200% within the first month.',
    rating: 5,
    initial: 'S',
    color: 'from-[#0066FF] to-[#00D4FF]',
  },
  {
    name: 'Ahmed Benali',
    role: 'Founder, GreenLeaf Organics',
    text: 'The branding package they delivered was phenomenal. Our new logo and brand identity perfectly capture our mission. The team is incredibly professional and creative.',
    rating: 5,
    initial: 'A',
    color: 'from-[#00CC88] to-[#00AAFF]',
  },
  {
    name: 'Maria Garcia',
    role: 'Marketing Director, Urban Threads',
    text: 'Working with DevStudio was an absolute pleasure. They built our e-commerce platform from scratch and it handles thousands of orders daily without any issues. Highly recommended!',
    rating: 5,
    initial: 'M',
    color: 'from-[#AA33FF] to-[#FF33AA]',
  },
  {
    name: 'James Wilson',
    role: 'CTO, FinanceHub',
    text: 'The attention to detail and technical expertise of DevStudio is unmatched. They delivered a complex web application ahead of schedule and under budget. A true partner in our digital journey.',
    rating: 5,
    initial: 'J',
    color: 'from-[#FF6633] to-[#FF3366]',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Owner, Artisan Coffee Co.',
    text: 'DevStudio created the perfect logo for our coffee brand. It\'s elegant, memorable, and our customers love it. The whole process was smooth and collaborative.',
    rating: 5,
    initial: 'F',
    color: 'from-[#CC8844] to-[#FF6644]',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, isVisible] = useScrollReveal(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[150px]" />

      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">
            Client Reviews
          </span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Slider */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {/* Main Card */}
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote mark */}
            <div className="text-6xl md:text-8xl gradient-text font-serif leading-none mb-4 opacity-30">"</div>
            
            {/* Review */}
            <p className="text-lg md:text-xl text-[#CCCCDD] leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-500">
              {testimonials[current].text}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FFAA00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Avatar & Info */}
            <div className="flex items-center justify-center gap-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg`}>
                {testimonials[current].initial}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white">{testimonials[current].name}</h4>
                <p className="text-sm text-[#8888AA]">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-none ${
                  i === current
                    ? 'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] w-8'
                    : 'bg-[#2A2A3A] hover:bg-[#3A3A4A]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
