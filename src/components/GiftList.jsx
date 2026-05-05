import React from 'react';
import { motion } from 'framer-motion';
import { gifts } from '../data/gifts';
import { Heart } from 'lucide-react';

const GiftCard = ({ title, price, link, description, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-sm shadow-sm border border-wedding-light flex flex-col group hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-square bg-wedding-light mb-6 overflow-hidden relative">
      <img
        src={`https://placehold.co/400x400/FDFCF8/C5A059?text=${title.split(' ').join('+')}`}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 text-wedding-moss/20 group-hover:text-wedding-moss transition-colors">
        <Heart fill="currentColor" className="w-6 h-6" />
      </div>
    </div>

    <h3 className="text-xl mb-2 font-serif text-wedding-dark">{title}</h3>
    <p className="text-sm text-wedding-dark/60 mb-6 flex-grow line-clamp-3 italic">
      {description}
    </p>

    <div className="flex items-center justify-between mt-auto pt-6 border-t border-wedding-light">
      <span className="text-lg font-serif text-wedding-moss">
        R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-wedding-moss text-white text-xs uppercase tracking-widest font-bold hover:bg-wedding-dark transition-colors"
      >
        Presentear
      </a>
    </div>
  </motion.div>
);

const GiftList = () => {
  return (
    <section id="presentes" className="section-padding bg-wedding-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-wedding-moss uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Lista de Presentes</span>
          <h2 className="text-4xl md:text-5xl mb-6">Lista de presentes</h2>
          <p className="max-w-2xl mx-auto text-wedding-dark/60">
            Para você que tem duvidas de como nos presentear,  preparamos algumas opções abaixo. Separamos a opção para cotas de carinho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <GiftCard key={gift.id} {...gift} index={index} />
          ))}
        </div>

        <div className="mt-20 glass p-10 text-center max-w-3xl mx-auto rounded-lg">
          <h4 className="text-2xl font-serif mb-4">Informações Importantes</h4>
          <p className="text-wedding-dark/70 text-sm leading-relaxed">
            Todas as contribuições são processadas de forma segura via InfinitePay. Caso prefira realizar um PIX direto, nossa chave é: <strong>casal@exemplo.com.br</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftList;
