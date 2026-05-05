import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images dynamically from the CARROSSEL folder
const imagesData = import.meta.glob('../assets/CARROSSEL/*.jpg', { eager: true });
const imageUrls = Object.values(imagesData).map(img => img.default);

const PhotoCarousel = () => {
  // Use a subset of 15 images to improve performance (avoiding memory overload with 40+ huge files)
  const subsetImages = imageUrls.slice(0, 15);
  const duplicatedImages = [...subsetImages, ...subsetImages];

  return (
    <section id="fotos" className="py-16 bg-wedding-offwhite overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-wedding-moss/60 uppercase tracking-[0.4em] text-xs font-bold mb-3 block">Galeria</span>
          <h2 className="text-3xl md:text-5xl text-wedding-sand font-serif italic mb-6">
            Momento Especial
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-wedding-sand/40"></div>
            <div className="w-2 h-2 rounded-full border border-wedding-sand/40"></div>
            <div className="w-12 h-px bg-wedding-sand/40"></div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Continuous Scroll Container with Hardware Acceleration */}
        <motion.div 
          className="flex gap-4 px-2"
          style={{ 
            width: "fit-content",
            willChange: "transform",
            backfaceVisibility: "hidden"
          }}
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, 
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[200px] h-[300px] md:w-[280px] md:h-[420px] relative overflow-hidden rounded-sm shadow-sm group transition-all duration-500 hover:scale-[1.05]"
            >
              <img
                src={src}
                className="w-full h-full object-cover transform-gpu"
                alt={`Wedding Photo ${index}`}
                loading="eager" // Better for ticker to have them ready
              />
              <div className="absolute inset-0 bg-wedding-moss/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-wedding-offwhite to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-wedding-offwhite to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
