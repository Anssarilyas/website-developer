import { useScrollReveal } from '../hooks';

const testimonials = [
  {
    text: "Très satisfait du résultat ! Le site livré est rapide, bien structuré et parfaitement adapté à mes besoins. Excellent travail, je recommande vivement !",
    name: "Rachid. M",
    role: "Entrepreneur",
  },
  {
    text: "Une équipe professionnelle et à l'écoute. Mon site e-commerce est magnifique et mes ventes ont augmenté de 40% en 2 mois. Merci !",
    name: "Fatima. Z",
    role: "Commerçante",
  },
  {
    text: "Le meilleur investissement pour mon entreprise. Le site est moderne, rapide et les clients me trouvent facilement sur Google.",
    name: "Ahmed. B",
    role: "Chef d'entreprise",
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/team_meeting.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[8vw] font-black text-white/10 uppercase tracking-wider">AVIS CLIENTS</h2>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div></div>
          {/* Testimonial card */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
              <div className="text-5xl text-orange/30 mb-4 font-accent">"</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                {testimonials[0].text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gray-300"></div>
                <div>
                  <p className="font-bold text-navy">{testimonials[0].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
