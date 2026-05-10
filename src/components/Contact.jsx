import { useState } from 'react';
import { useScrollReveal } from '../hooks';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[150px]" />
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-block text-[#0066FF] text-sm font-semibold tracking-wider uppercase mb-4">Get In Touch</span>
          <h2 className="section-title">Let's Start Your <span className="gradient-text">Project</span></h2>
          <p className="section-subtitle mx-auto">Ready to bring your vision to life? Contact us today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-[#8888AA] mb-8 leading-relaxed">Feel free to reach out to us. We're always ready to discuss your project and provide a free consultation.</p>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-[#8888AA]">Phone</p>
                  <a href="tel:0603385513" className="text-white font-medium no-underline hover:text-[#0066FF] transition-colors">0603385513</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-[#8888AA]">Email</p>
                  <a href="mailto:ilyaseanssar35@gmail.com" className="text-white font-medium no-underline hover:text-[#0066FF] transition-colors">ilyaseanssar35@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00CC88]/10 border border-[#00CC88]/20 flex items-center justify-center text-[#00CC88] flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.237 0-4.308-.744-5.975-1.999l-.417-.312-2.785.73.744-2.717-.342-.544A9.936 9.936 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-[#8888AA]">WhatsApp</p>
                  <a href="https://wa.me/212603385513" target="_blank" rel="noopener noreferrer" className="text-white font-medium no-underline hover:text-[#00CC88] transition-colors">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-[#8888AA] uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {['facebook','instagram','twitter','linkedin'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-xl bg-[#1A1A25] border border-[#2A2A3A] flex items-center justify-center text-[#8888AA] hover:text-[#0066FF] hover:border-[#0066FF]/30 transition-all duration-300 no-underline">
                    <span className="text-xs font-bold uppercase">{s[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#2A2A3A] h-48">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217676.04013038552!2d-7.7!3d33.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1" width="100%" height="100%" style={{border:0,filter:'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)'}} allowFullScreen loading="lazy" title="Google Maps" />
            </div>
          </div>
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#CCCCDD] mb-2">Full Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A] text-white placeholder-[#555] outline-none focus:border-[#0066FF] transition-colors text-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#CCCCDD] mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A] text-white placeholder-[#555] outline-none focus:border-[#0066FF] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#CCCCDD] mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Your phone number" className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A] text-white placeholder-[#555] outline-none focus:border-[#0066FF] transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#CCCCDD] mb-2">Service Needed</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A] text-white outline-none focus:border-[#0066FF] transition-colors text-sm cursor-pointer">
                    <option value="">Select a service</option>
                    <option>Custom Website Development</option>
                    <option>E-commerce Website</option>
                    <option>Landing Page</option>
                    <option>UI/UX Design</option>
                    <option>Logo Design</option>
                    <option>Brand Identity</option>
                    <option>Website Maintenance</option>
                    <option>SEO Optimization</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#CCCCDD] mb-2">Message</label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your project..." className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A] text-white placeholder-[#555] outline-none focus:border-[#0066FF] transition-colors text-sm resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5 text-[#00CC88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
