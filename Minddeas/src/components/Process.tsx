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
      <header className="flex flex-col border-b border-border-main px-6 py-24 lg:px-32 lg:py-40 bg-white">
        <div className="flex items-center gap-8">
          <span className="font-mono text-[12px] text-primary font-bold uppercase tracking-[0.4em]">02 // SYSTEM</span>
          <div className="h-px w-32 bg-border-main opacity-30"></div>
        </div>
        <h2 className="mt-12 max-w-6xl font-display text-7xl font-bold uppercase leading-[0.85] tracking-tighter text-text-main lg:text-[110px]">
          THE LINEAR PROCESS
        </h2>
        <p className="mt-12 max-w-3xl font-body text-2xl text-text-muted leading-relaxed font-medium">
          Our methodology transforms the complexity of your business into a clear and predictable execution line. No curves, no returns.
        </p>
      </header>

      <div className="group/container relative flex min-h-[750px] w-full flex-col lg:flex-row border-b border-border-main bg-white">
        <div className="pointer-events-none absolute left-0 top-1/2 z-0 hidden w-full -translate-y-1/2 lg:block">
          <div className="h-px w-full bg-border-main opacity-10"></div>
        </div>

        {steps.map((step, i) => (
          <article key={step.id} className="group/col relative flex flex-1 flex-col border-b lg:border-b-0 lg:border-r border-border-main bg-white p-16 transition-all duration-700 hover:flex-[3] hover:bg-bg-light group-hover/container:opacity-40 hover:!opacity-100 overflow-hidden">
            <div className="relative z-10 flex w-full items-start justify-between mb-12">
              <span className="font-mono text-[12px] font-bold text-text-muted group-hover/col:text-primary transition-colors tracking-[0.3em] uppercase">STEP_{step.id}</span>
              <ArrowRight className="w-8 h-8 text-primary opacity-0 -translate-x-6 transition-all duration-500 group-hover/col:opacity-100 group-hover/col:translate-x-0" />
            </div>
            
            <h3 className="mt-6 font-display text-5xl font-bold uppercase text-text-main leading-none">
              <span className="block text-6xl mb-4 opacity-10 group-hover/col:opacity-100 transition-all duration-500" style={{ WebkitTextStroke: '1px var(--color-text-main)' }}>{step.id}</span>
              {step.title}
            </h3>
            
            <div className="relative z-10 my-auto flex items-center justify-center py-24 lg:py-0">
              <div className="relative flex w-36 h-36 items-center justify-center border border-text-main/20 bg-white transition-all duration-700 group-hover/col:border-primary group-hover/col:bg-primary group-hover/col:scale-110 shadow-2xl group-hover/col:shadow-primary/30 group-hover/col:rotate-[360deg]">
                <step.icon className="w-16 h-16 text-text-main transition-colors duration-700 group-hover/col:text-white" />
                {i > 0 && <div className="absolute -left-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
                {i < steps.length - 1 && <div className="absolute -right-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
              </div>
            </div>

            <div className="relative z-10 mt-auto overflow-hidden opacity-100 transition-all duration-700 lg:max-h-0 lg:opacity-0 lg:group-hover/col:max-h-[300px] lg:group-hover/col:opacity-100">
              <div className="border-t border-dashed border-text-muted/30 pt-12">
                <h4 className="mb-4 font-display text-2xl font-bold text-text-main uppercase tracking-widest">{step.subtitle}</h4>
                <p className="font-body text-lg lg:text-xl leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-main p-16 lg:p-24 bg-white">
          <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-text-muted font-bold">SYSTEM STATUS</span>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-3.5 h-3.5 animate-pulse bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
            <span className="font-display text-2xl font-bold text-text-main tracking-tight uppercase">Operational • V.4.0</span>
          </div>
        </div>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group relative flex h-40 lg:h-48 cursor-pointer items-center justify-between overflow-hidden bg-text-main p-16 lg:p-24 transition-all duration-700 hover:bg-primary">
          <span className="font-display text-3xl lg:text-4xl font-bold text-white transition-colors tracking-[0.3em] uppercase relative z-10">START DIAGNOSTIC</span>
          <ArrowRight className="w-12 h-12 lg:w-16 lg:h-16 text-white transition-all duration-700 group-hover:-rotate-45 relative z-10" />
          <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern group-hover:opacity-30 transition-all duration-700 scale-150 group-hover:scale-100"></div>
        </button>
      </div>
    </section>
  );
}
