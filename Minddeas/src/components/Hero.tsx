import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="about" className="flex-1 flex flex-col md:flex-row w-full overflow-hidden relative border-b border-border-main min-h-[calc(100vh-70px)]">
      <div className="w-full md:w-[55%] flex flex-col justify-center px-5 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-32 border-border-main relative bg-white">
        <div className="absolute top-12 left-6 md:left-24 font-mono text-[11px] text-text-muted uppercase tracking-widest">
          // SYSTEM V.1.0
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl z-10">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-[74px] lg:text-[96px] xl:text-[110px] leading-[0.9] md:leading-[0.85] tracking-tight text-text-main break-words">
            Logic Applied to <br />
            <span className="text-primary">Real Results.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-body text-text-main/80 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-xl leading-relaxed border-l-2 border-primary pl-4 sm:pl-6 md:pl-10">
              Data-driven business consulting, not guesswork. We structure corporate chaos.
            </p>
            <div className="pt-6 sm:pt-8 md:pt-10">
              <button className="bg-primary text-white h-14 sm:h-16 md:h-20 px-6 sm:px-8 md:px-16 text-[11px] sm:text-[12px] md:text-[16px] font-display font-bold uppercase tracking-[0.12em] md:tracking-[0.2em] flex items-center gap-3 sm:gap-4 md:gap-6 w-fit group hover:bg-text-main transition-all duration-300 shadow-xl shadow-primary/10">
                <span className="whitespace-normal text-left">START DIAGNOSTIC</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex flex-wrap gap-4 sm:gap-8 md:gap-16 font-mono text-[11px] md:text-[12px] text-text-muted uppercase tracking-[0.2em] md:tracking-widest md:absolute md:bottom-12 md:left-6 lg:left-24">
          <span className="opacity-50 font-bold">X: 192.44</span>
          <span className="opacity-50 font-bold">Y: 04.21</span>
          <span className="text-primary font-bold">STATUS: ONLINE</span>
        </div>
      </div>
      
      <div className="w-full md:w-[45%] bg-bg-light relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] md:min-h-auto overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative w-full h-full p-6 sm:p-10 md:p-16 lg:p-20 flex items-center justify-center">
          <motion.div 
            style={{ y: scrollY, opacity }}
            className="relative w-full max-w-[480px] aspect-square"
          >
            {[...Array(24)].map((_, i) => {
              const size = 60 + Math.random() * 40;
              const isPrimary = i % 3 === 0;
              const isGray = i % 3 === 1;
              
              return (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    rotate: Math.random() * 360
                  }}
                  animate={{ 
                    opacity: 0.6, 
                    scale: 1,
                    x: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                    y: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                    rotate: [Math.random() * 360, Math.random() * 360, Math.random() * 360],
                  }}
                  transition={{ 
                    opacity: { duration: 1 },
                    scale: { duration: 1 },
                    x: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 20 + Math.random() * 20, repeat: Infinity, ease: "linear" },
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    opacity: 1, 
                    zIndex: 20,
                    backgroundColor: isPrimary ? 'rgba(244, 162, 32, 1)' : 'rgba(255, 255, 255, 1)'
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: size,
                    height: size,
                    marginTop: -size / 2,
                    marginLeft: -size / 2,
                  }}
                  className={`border border-border-main shadow-xl transition-colors duration-500 cursor-none ${isPrimary ? 'bg-primary/40' : isGray ? 'bg-gray-200/40' : 'bg-white/40'}`}
                />
              );
            })}
          </motion.div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 lg:top-16 lg:right-16 font-mono text-[9px] sm:text-[10px] md:text-[11px] text-primary border border-primary px-2 sm:px-3 md:px-4 py-1.5 md:py-2 bg-white font-bold tracking-[0.12em] md:tracking-[0.2em] shadow-lg max-w-[80%] truncate">
            SYSTEM_STATUS: DISORGANIZED
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 lg:bottom-20 lg:left-16 font-mono text-[9px] sm:text-[10px] md:text-[11px] text-text-main border border-border-main px-2 sm:px-3 md:px-4 py-1.5 md:py-2 bg-white font-bold tracking-[0.12em] md:tracking-[0.2em] shadow-lg max-w-[80%] truncate">
            CHAOS_INDEX: 98.4%
          </div>
        </div>
      </div>
    </section>
  );
}
