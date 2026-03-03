import { ArrowRight } from 'lucide-react';

export function Stats() {
  return (
    <section className="flex flex-col w-full border-b border-border-main bg-white">
      <div className="flex flex-col md:flex-row w-full border-b border-border-main">
        <div className="w-full md:w-1/2 p-8 md:p-24 lg:p-32 border-b md:border-b-0 md:border-r border-border-main bg-white relative">
          <div className="absolute top-16 right-16 text-primary opacity-30">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>
          <span className="font-mono text-[12px] text-primary uppercase tracking-[0.3em] mb-10 block font-bold">01 // MISSION</span>
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-text-main mb-16">
            WE <br/> ORGANIZE <br/> <span className="text-primary">CHAOS.</span>
          </h2>
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-text-main/80 border-l-2 border-primary pl-10 max-w-2xl leading-relaxed">
            Data-driven business consulting, not guesswork. A technical, cold, and surgical approach to ensure your business success through logical architecture.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
          <div className="p-16 lg:p-24 border-b md:border-r border-border-main bg-white flex flex-col justify-center group hover:bg-bg-light transition-all duration-500">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] mb-8 font-bold">IMPACT VOLUME</span>
            <span className="font-display font-bold text-7xl lg:text-8xl text-text-main mb-4 group-hover:scale-110 transition-transform origin-left">+150</span>
            <span className="font-display font-medium text-[14px] uppercase tracking-widest text-text-main opacity-50">PROJECTS</span>
          </div>
          <div className="p-16 lg:p-24 border-b border-border-main bg-white flex flex-col justify-center group hover:bg-bg-light transition-all duration-500">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] mb-8 font-bold">FINANCIAL RETURN</span>
            <span className="font-display font-bold text-7xl lg:text-8xl text-text-main mb-4 group-hover:scale-110 transition-transform origin-left">$ 40M</span>
            <span className="font-display font-medium text-[14px] uppercase tracking-widest text-text-main opacity-50">GENERATED</span>
          </div>
          <div className="p-16 lg:p-24 border-b md:border-b-0 md:border-r border-border-main bg-white flex flex-col justify-center group hover:bg-bg-light transition-all duration-500">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] mb-8 font-bold">DIVERSIFICATION</span>
            <span className="font-display font-bold text-7xl lg:text-8xl text-text-main mb-4 group-hover:scale-110 transition-transform origin-left">12</span>
            <span className="font-display font-medium text-[14px] uppercase tracking-widest text-text-main opacity-50">SECTORS</span>
          </div>
          <div className="p-16 lg:p-24 bg-white flex flex-col justify-center group hover:bg-bg-light transition-all duration-500">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] mb-8 font-bold">PRECISION LEVEL</span>
            <span className="font-display font-bold text-7xl lg:text-8xl text-text-main mb-4 group-hover:scale-110 transition-transform origin-left">0%</span>
            <span className="font-display font-medium text-[14px] uppercase tracking-widest text-text-main opacity-50">GUESSWORK</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-16 py-10 bg-bg-light">
        <span className="font-mono text-[12px] text-text-muted uppercase tracking-widest mb-6 md:mb-0 font-bold opacity-60">
          DATA ARCHITECTURE V2.0.4 // MINDDEAS CORE
        </span>
        <button className="font-display font-bold text-[12px] uppercase tracking-[0.3em] text-text-main flex items-center gap-4 hover:text-primary transition-all group">
          VIEW FULL MANIFESTO <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}
