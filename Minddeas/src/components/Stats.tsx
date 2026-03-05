import { motion } from 'motion/react';

export function Stats() {
  return (
    <section className="flex flex-col w-full border-b border-border-main bg-white">
      <div className="flex flex-col md:flex-row w-full md:border-b border-border-main">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 lg:p-24 xl:p-32 md:border-r border-border-main bg-white relative">
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-16 md:right-16 text-primary opacity-30">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <span className="font-mono text-[12px] text-primary uppercase tracking-[0.3em] mb-10 block font-bold">01 // MISSION</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.9] md:leading-[0.85] tracking-tight text-text-main mb-10 sm:mb-12 md:mb-16 break-words">
            WE <br/> ORGANIZE <br/> <span className="text-primary">CHAOS.</span>
          </h2>
          <p className="font-body text-base sm:text-lg md:text-2xl lg:text-3xl text-text-main/80 border-l-2 border-primary pl-4 sm:pl-6 md:pl-10 max-w-2xl leading-relaxed">
            Data-driven business consulting, not guesswork. A technical, cold, and surgical approach to ensure your business success through logical architecture.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 md:p-12 bg-bg-light relative overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[500px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative w-full max-w-[480px] aspect-square">
            <motion.div 
              initial="disorganized"
              whileInView="organized"
              exit="disorganized"
              viewport={{ once: false, margin: "-150px" }}
              className="grid grid-cols-4 grid-rows-4 gap-px bg-border-main w-full h-full border border-border-main shadow-2xl"
            >
              {[...Array(16)].map((_, i) => {
                const colors = [
                  'bg-white', 'bg-primary/10', 'bg-primary/80', 'bg-text-main',
                  'bg-gray-100', 'bg-white', 'bg-primary/40', 'bg-white',
                  'bg-primary/60', 'bg-gray-200', 'bg-white', 'bg-primary/90',
                  'bg-text-main/10', 'bg-white', 'bg-primary/20', 'bg-gray-100'
                ];
                
                const col = i % 4;
                const row = Math.floor(i / 4);

                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={{
                      disorganized: { 
                        scale: 0.8,
                        opacity: 0,
                        x: (col - 1.5) * 100 + (Math.random() * 200 - 100),
                        y: -600 - (row * 100), // Coming from far above
                        rotate: Math.random() * 90 - 45
                      },
                      organized: { 
                        scale: 1,
                        opacity: 1,
                        x: 0, 
                        y: 0, 
                        rotate: 0,
                        transition: { 
                          type: "spring",
                          stiffness: 70,
                          damping: 18,
                          delay: (col + row) * 0.08
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      zIndex: 10, 
                      backgroundColor: '#F4A220', // primary orange
                      transition: { duration: 0.2 }
                    }}
                    className={`${colors[i]} transition-colors duration-500 relative flex items-center justify-center group/sq`}
                  >
                    <div className="absolute inset-0 border border-primary/0 group-hover/sq:border-white/30 transition-all pointer-events-none"></div>
                    <div className="font-mono text-[8px] opacity-10 group-hover/sq:opacity-100 group-hover/sq:text-white transition-all">
                      {`0x${i.toString(16).toUpperCase()}`}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="mt-4 sm:mt-6 font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-[0.12em] sm:tracking-[0.2em] font-bold text-center md:text-left">
              SYSTEM_REORGANIZATION_COMPLETE: 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
