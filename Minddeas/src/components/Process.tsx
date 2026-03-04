import { ArrowRightToLine, Cpu, PencilRuler, Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'IMMERSION',
    subtitle: 'Data Collection',
    desc: 'We dive into the current operation to extract the truth from the numbers. Interviews, database analysis, and existing process auditing.',
    icon: ArrowRightToLine
  },
  {
    id: '02',
    title: 'ANALYSIS',
    subtitle: 'Logical Diagnosis',
    desc: 'Identification of bottlenecks and inefficiencies through logical modeling. We separate symptoms from real causes.',
    icon: Cpu
  },
  {
    id: '03',
    title: 'SOLUTION',
    subtitle: 'Process Architecture',
    desc: 'Design of the new organizational structure. Definition of KPIs, responsibilities and optimized workflows.',
    icon: PencilRuler
  },
  {
    id: '04',
    title: 'EXECUTION',
    subtitle: 'Monitored Implementation',
    desc: 'On-site monitoring of the application. Real-time fine-tuning and team training for the new reality.',
    icon: Check
  }
];

export function Process() {
  return (
    <section id="methodology" className="w-full flex flex-col border-b border-border-main bg-white">
      <header className="flex flex-col border-b border-border-main px-6 py-16 sm:py-20 lg:px-32 lg:py-40 bg-white">
        <div className="flex items-center gap-8">
          <span className="font-mono text-[12px] text-primary font-bold uppercase tracking-[0.4em]">02 // SYSTEM</span>
          <div className="h-px w-32 bg-border-main opacity-30"></div>
        </div>
        <h2 className="mt-8 sm:mt-10 lg:mt-12 max-w-6xl font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-[0.9] md:leading-[0.85] tracking-tight text-text-main lg:text-[110px] break-words">
          THE LINEAR PROCESS
        </h2>
        <p className="mt-6 sm:mt-8 lg:mt-12 max-w-3xl font-body text-base sm:text-lg md:text-2xl text-text-muted leading-relaxed font-medium">
          Our methodology transforms the complexity of your business into a clear and predictable execution line. No curves, no returns.
        </p>
      </header>

      <div className="group/container relative flex min-h-[750px] w-full flex-col lg:flex-row border-b border-border-main bg-white">
        <div className="pointer-events-none absolute left-0 top-1/2 z-0 hidden w-full -translate-y-1/2 lg:block">
          <div className="h-px w-full bg-border-main opacity-10"></div>
        </div>

        {steps.map((step, i) => (
          <article key={step.id} className="group/col relative flex flex-1 flex-col lg:border-r border-border-main bg-white p-6 sm:p-10 lg:p-16 transition-all duration-700 hover:flex-[3] hover:bg-bg-light group-hover/container:opacity-40 hover:!opacity-100 overflow-hidden">
            <div className="relative z-10 flex w-full items-start justify-between mb-12">
              <span className="font-mono text-[12px] font-bold text-text-muted group-hover/col:text-primary transition-colors tracking-[0.3em] uppercase">STEP_{step.id}</span>
              <ArrowRight className="w-8 h-8 text-primary opacity-0 -translate-x-6 transition-all duration-500 group-hover/col:opacity-100 group-hover/col:translate-x-0" />
            </div>
            
            <h3 className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-text-main leading-none break-words">
              <span className="block text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 opacity-10 group-hover/col:opacity-100 transition-all duration-500" style={{ WebkitTextStroke: '1px var(--color-text-main)' }}>{step.id}</span>
              {step.title}
            </h3>
            
            <div className="relative z-10 my-auto flex items-center justify-center py-12 sm:py-16 lg:py-0">
              <div className="relative flex w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 items-center justify-center border border-text-main/20 bg-white transition-all duration-700 group-hover/col:border-primary group-hover/col:bg-primary group-hover/col:scale-110 shadow-2xl group-hover/col:shadow-primary/30 group-hover/col:rotate-[360deg]">
                <step.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-text-main transition-colors duration-700 group-hover/col:text-white" />
                {i > 0 && <div className="absolute -left-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
                {i < steps.length - 1 && <div className="absolute -right-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
              </div>
            </div>

            <div className="relative z-10 mt-auto overflow-hidden opacity-100 transition-all duration-700 lg:max-h-0 lg:opacity-0 lg:group-hover/col:max-h-[300px] lg:group-hover/col:opacity-100">
              <div className="border-t border-dashed border-text-muted/30 pt-12">
                <h4 className="mb-4 font-display text-xl sm:text-2xl font-bold text-text-main uppercase tracking-[0.12em] sm:tracking-widest break-words">{step.subtitle}</h4>
                <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 py-8 md:py-10 bg-bg-light gap-4 md:gap-0">
        <span className="font-mono text-[11px] md:text-[12px] text-text-muted uppercase tracking-[0.15em] md:tracking-widest mb-0 font-bold opacity-60 text-center md:text-left break-words">
          COMMUNICATION NODE ACTIVE // READY FOR INPUT
        </span>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-display font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em] text-text-main flex items-center gap-3 md:gap-4 hover:text-primary transition-all group text-center"
        >
          INITIATE CONTACT <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}
