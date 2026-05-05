import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import heroImage from '../assets/FOTO_FUNDO.jpg';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-8">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Minutos', value: timeLeft.minutes },
        { label: 'Segundos', value: timeLeft.seconds }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <span className="text-3xl md:text-5xl font-serif text-wedding-moss">{String(item.value).padStart(2, '0')}</span>
          <span className="text-xs md:text-sm uppercase tracking-widest text-wedding-moss font-bold">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-wedding-offwhite">
      <div className="absolute inset-0 z-0 bg-wedding-offwhite">
        <img
          src={heroImage}
          alt="Julia & Bruno"
          className="w-full h-full object-cover opacity-60 watercolor-effect"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wedding-offwhite/30 to-wedding-offwhite"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-wedding-moss mb-4 block font-black drop-shadow-sm">Vão se casar!</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 text-wedding-dark drop-shadow-sm">
            Julia <span className="italic font-light">&</span> Bruno
          </h1>
          <p className="text-lg md:text-2xl font-serif italic text-wedding-dark mb-8 font-semibold drop-shadow-sm">
            28 de Setembro de 2026
          </p>

          <div className="w-16 h-px bg-wedding-moss mx-auto mb-12"></div>

          <Countdown targetDate="2026-09-28T16:00:00" />

          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-12 px-10 py-4 bg-wedding-moss text-white uppercase tracking-widest text-sm hover:bg-wedding-moss/90 transition-colors shadow-lg"
          >
            Confirmar Presença
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-wedding-moss"
      >
        <div className="w-px h-12 bg-wedding-moss/30 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
