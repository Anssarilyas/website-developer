import { useState } from 'react';
import { useScrollReveal } from '../hooks';

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Depending on the complexity, a standard website takes 2-4 weeks. More complex projects like e-commerce platforms or web applications can take 4-8 weeks. We always provide a detailed timeline before starting.' },
  { q: 'What is your design process?', a: 'We follow a 4-step process: Discovery (understanding your needs), Design (creating mockups), Development (building the site), and Launch (deploying and testing). You are involved at every stage.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! All our plans include post-launch support. We offer maintenance packages for ongoing updates, security patches, and performance optimization to keep your site running smoothly.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely! We specialize in website redesigns. We will analyze your current site, identify areas for improvement, and create a modern, high-performing version that better serves your business goals.' },
  { q: 'What technologies do you use?', a: 'We use modern technologies including React, Next.js, Node.js, and Tailwind CSS for websites. For e-commerce, we work with Shopify, WooCommerce, and custom solutions. We always choose the best stack for your specific needs.' },
  { q: 'How much does a logo design cost?', a: 'Logo design starts at $299 for basic packages. Our professional logo packages include multiple concepts, unlimited revisions, and full brand guidelines. Contact us for a custom quote based on your needs.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="section-container max-w-3xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle mx-auto">Find answers to common questions about our services.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`card cursor-pointer transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }} onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                <p className="text-sm text-[#8888AA] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
