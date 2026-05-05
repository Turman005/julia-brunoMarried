import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-wedding-dark text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-8 italic">
          Julia <span className="text-wedding-moss">&</span> Bruno
        </h2>
        <div className="w-12 h-px bg-wedding-moss/50 mx-auto mb-8"></div>
        <p className="text-wedding-light/50 text-sm tracking-[0.2em] uppercase mb-12">
          28.09.2026 • Brusque, SC
        </p>

        <p className="text-wedding-light/30 text-[10px] uppercase tracking-widest">
          Feito com carinho para o nosso grande dia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
