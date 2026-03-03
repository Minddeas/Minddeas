import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="flex-1 flex flex-col md:flex-row w-full overflow-hidden relative border-b border-border-main min-h-[calc(100vh-70px)]">
      <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-24 py-20 md:py-32 border-b md:border-b-0 md:border-r border-border-main relative bg-white">
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
          <div className="grid grid-cols-4 grid-rows-4 gap-px bg-border-main w-full max-w-[480px] aspect-square border border-border-main shadow-[30px_30px_0px_0px_rgba(244,162,32,0.1)] transition-transform hover:scale-105 duration-700">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`bg-white transition-all duration-300 ${[1, 5, 9, 13, 2, 6, 14].includes(i) ? 'bg-primary/90' : i === 4 || i === 8 || i === 12 ? 'bg-gray-200' : 'hover:bg-primary/10'}`}></div>
            ))}
          </div>
          <div className="absolute top-16 right-16 font-mono text-[11px] text-primary border border-primary px-4 py-2 bg-white font-bold tracking-[0.2em] shadow-lg">
            PROCESS_INIT()
          </div>
          <div className="absolute bottom-20 left-16 font-mono text-[11px] text-text-main border border-border-main px-4 py-2 bg-white font-bold tracking-[0.2em] shadow-lg">
            DATA_FLOW: 100%
          </div>
        </div>
      </div>
    </section>
  );
}
