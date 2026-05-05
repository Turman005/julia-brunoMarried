import React from 'react';
import { MapPin, Clock, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';

const InfoCard = ({ icon: Icon, title, description, buttonText, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 flex flex-col items-center text-center group hover:bg-wedding-moss hover:text-white transition-all duration-500 rounded-lg"
  >
    <div className="w-16 h-16 rounded-full bg-wedding-light flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
      <Icon className="w-8 h-8 text-wedding-moss group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-2xl mb-4 font-serif">{title}</h3>
    <p className="text-wedding-dark/70 mb-8 group-hover:text-white/80">{description}</p>
    <button className="mt-auto px-6 py-2 bg-wedding-moss text-white group-hover:bg-white group-hover:text-wedding-moss text-sm uppercase tracking-widest hover:bg-white hover:text-wedding-moss transition-all border border-wedding-moss group-hover:border-white">
      {buttonText}
    </button>
  </motion.div>
);

const EventInfo = () => {
  const infos = [
    {
      icon: MapPin,
      title: "Local",
      description: "Colina Eventos, R. Valquiria Laurentino Pereira, 25 - Limoeiro, Itajaí - SC, 88356-485",
      buttonText: "Ver no Mapa"
    },
    {
      icon: Clock,
      title: "Horário",
      description: "Cerimônia às 16:30h, seguida de recepção no mesmo local.",
      buttonText: "Adicionar ao Calendário"
    },
    {
      icon: Shirt,
      title: "Dress Code",
      description: "Traje Social Completo. Sugerimos evitar as cores Branco e Off-white.",
      buttonText: "Ver Inspirações"
    }
  ];

  return (
    <section id="evento" className="section-padding bg-wedding-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-wedding-moss uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Informações Úteis</span>
          <h2 className="text-4xl md:text-5xl">O Grande Dia</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {infos.map((info, index) => (
            <InfoCard key={index} {...info} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
