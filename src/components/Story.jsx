import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section id="historia" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-wedding-moss uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Nossa Trajetória</span>
          <h2 className="text-4xl md:text-5xl mb-12">Nossa História</h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left text-wedding-dark/80 leading-relaxed font-sans">
            <div className="space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
          
          <div className="mt-16 relative aspect-[16/9] bg-neutral-100 overflow-hidden rounded-sm shadow-xl">
            <img 
              src="https://placehold.co/1200x675/F9F6F1/C5A059?text=MOMENTO+ESPECIAL" 
              alt="Story Image" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
