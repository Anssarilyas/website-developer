import { useState } from 'react';
import { useScrollReveal } from '../hooks';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Bonjour, je suis ${form.name}.%0A📞 Téléphone: ${form.phone}%0A📧 Email: ${form.email}%0A💬 Message: ${form.message}`;
    window.open(`https://wa.me/212782587835?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative" ref={ref}>
      {/* CTA bar */}
      <div className="bg-white py-8">
        <div className="section-container">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="text-lg text-gray-700 font-medium">Besoin de créer un site web pour votre projet ?</p>
            <div className="flex gap-3">
              <a href="tel:0782587835" className="btn-dark text-sm py-3 px-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Appelez-nous
              </a>
              <a href="#contact" className="btn-outline-dark text-sm py-3 px-6">Devis Gratuit</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact form area — dark bg */}
      <div className="bg-navy py-24 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Big text + rocket */}
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                DEMANDEZ<br/>VOTRE DEVIS<br/>GRATUIT
              </h2>
              <div className="w-20 h-20 rounded-full border-2 border-blue-400 flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <img src="/rocket.png" alt="Rocket" className="w-48 h-48 object-contain animate-float mx-auto lg:mx-0" />
            </div>

            {/* Right: Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <form onSubmit={handleSubmit} className="bg-[#2a2a40] rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Remplissez le formulaire</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">VOTRE NOM</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Oliver Spiteri" className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-orange transition-colors text-sm placeholder-gray-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">TÉLÉPHONE</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="e.g. 06 61 81 81 94" className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-orange transition-colors text-sm placeholder-gray-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">EMAIL</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="example@email.com" className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-orange transition-colors text-sm placeholder-gray-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">MESSAGE</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Votre Message ici.." className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-orange transition-colors text-sm placeholder-gray-600 resize-none" />
                  </div>
                  <button type="submit" className="btn-orange py-4 px-8 text-base">
                    {submitted ? '✓ Message Envoyé!' : 'ENVOYER'}
                    {!submitted && <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center ml-2"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
