import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guests: '0'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Submission:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-20 px-6">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <h2 className="text-3xl font-serif text-wedding-moss mb-4">Obrigado!</h2>
          <p className="text-wedding-dark/70">Sua confirmação foi enviada com sucesso. Mal podemos esperar por esse momento!</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-wedding-moss underline uppercase tracking-widest text-xs"
          >
            Enviar outra resposta
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-wedding-moss uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Confirmação de Presença</span>
          <h2 className="text-4xl md:text-5xl">Você Virá?</h2>
          <p className="text-wedding-dark/60 mt-4 italic font-serif">Por favor, confirme sua presença até o dia 10 de Setembro.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-wedding-moss mb-2 font-bold">Nome Completo</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Como está no convite"
                className="w-full px-4 py-3 border-b-2 border-wedding-light focus:border-wedding-moss outline-none transition-colors bg-wedding-light/30"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-wedding-moss mb-2 font-bold">E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-b-2 border-wedding-light focus:border-wedding-moss outline-none transition-colors bg-wedding-light/30"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-wedding-moss mb-2 font-bold">Telefone</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 border-b-2 border-wedding-light focus:border-wedding-moss outline-none transition-colors bg-wedding-light/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-wedding-moss mb-4 font-bold">Você comparecerá?</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    required
                    type="radio"
                    name="attending"
                    value="sim"
                    onChange={handleChange}
                    className="w-4 h-4 accent-wedding-moss"
                  />
                  <span className="text-wedding-dark group-hover:text-wedding-moss transition-colors">Sim, com certeza!</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    required
                    type="radio"
                    name="attending"
                    value="nao"
                    onChange={handleChange}
                    className="w-4 h-4 accent-wedding-moss"
                  />
                  <span className="text-wedding-dark group-hover:text-wedding-moss transition-colors">Infelizmente não poderei</span>
                </label>
              </div>
            </div>

            <AnimatePresence>
              {formData.attending === 'sim' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-xs uppercase tracking-widest text-wedding-moss mb-2 font-bold">Número de Acompanhantes</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-wedding-light focus:border-wedding-moss outline-none bg-wedding-light/30"
                  >
                    {[0, 1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'acompanhante' : 'acompanhantes'}</option>
                    ))}
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-wedding-moss text-white uppercase tracking-[0.2em] text-sm font-bold shadow-xl hover:bg-wedding-moss/90 transition-all mt-8"
          >
            Enviar Confirmação
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
