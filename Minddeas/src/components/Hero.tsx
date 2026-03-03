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
      <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-24 py-20 md:py-32 border-border-main relative bg-white">
        <div className="absolute top-12 left-6 md:left-24 font-mono text-[11px] text-text-muted uppercase tracking-widest">
          // SYSTEM V.1.0
        </div>
        <div className="flex flex-col gap-8 max-w-3xl z-10">
          <h2 className="font-display font-bold text-6xl md:text-[92px] lg:text-[110px] leading-[0.85] tracking-tighter text-text-main">
            Logic Applied to <br />
            <span className="text-primary">Real Results.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-body text-text-main/80 text-xl md:text-2xl lg:text-3xl max-w-xl leading-relaxed border-l-2 border-primary pl-10">
              Data-driven business consulting, not guesswork. We structure corporate chaos.
            </p>
            <div className="pt-10">
              <button className="bg-primary text-white h-20 px-16 text-[16px] font-display font-bold uppercase tracking-[0.2em] flex items-center gap-6 w-fit group hover:bg-text-main transition-all duration-300 shadow-xl shadow-primary/10">
                <span>START DIAGNOSTIC</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-6 md:left-24 flex gap-16 font-mono text-[12px] text-text-muted uppercase tracking-widest">
          <span className="opacity-50 font-bold">X: 192.44</span>
          <span className="opacity-50 font-bold">Y: 04.21</span>
          <span className="text-primary font-bold">STATUS: ONLINE</span>
        </div>
      </div>
      
      <div className="w-full md:w-[45%] bg-bg-light relative flex items-center justify-center min-h-[500px] md:min-h-auto overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative w-full h-full p-20 flex items-center justify-center">
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
          <div className="absolute top-16 right-16 font-mono text-[11px] text-primary border border-primary px-4 py-2 bg-white font-bold tracking-[0.2em] shadow-lg">
            SYSTEM_STATUS: DISORGANIZED
          </div>
          <div className="absolute bottom-20 left-16 font-mono text-[11px] text-text-main border border-border-main px-4 py-2 bg-white font-bold tracking-[0.2em] shadow-lg">
            CHAOS_INDEX: 98.4%
          </div>
        </div>
      </div>
    </section>
  );
}
