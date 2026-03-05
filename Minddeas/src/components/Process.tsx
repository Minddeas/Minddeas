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
      <header className="flex flex-col border-b border-border-main px-6 py-12 sm:py-14 lg:px-20 lg:py-16 bg-white">
        <div className="flex items-center gap-8">
          <span className="font-mono text-[12px] text-primary font-bold uppercase tracking-[0.4em]">02 // SYSTEM</span>
          <div className="h-px w-32 bg-border-main opacity-30"></div>
        </div>
        <h2 className="mt-8 sm:mt-10 lg:mt-12 max-w-6xl font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[0.92] tracking-tight text-text-main lg:text-[72px] break-words">
          THE LINEAR PROCESS
        </h2>
        <p className="mt-6 sm:mt-8 lg:mt-10 max-w-3xl font-body text-base sm:text-lg md:text-xl text-text-muted leading-relaxed font-medium">
          Our methodology transforms the complexity of your business into a clear and predictable execution line. No curves, no returns.
        </p>
      </header>

      <div className="group/container relative flex min-h-[560px] w-full flex-col lg:flex-row border-b border-border-main bg-white">
        <div className="pointer-events-none absolute left-0 top-1/2 z-0 hidden w-full -translate-y-1/2 lg:block">
          <div className="h-px w-full bg-border-main opacity-10"></div>
        </div>

        {steps.map((step, i) => (
          <article key={step.id} className="group/col relative flex flex-1 flex-col border-b last:border-b-0 lg:border-b-0 lg:border-r border-border-main bg-white p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:bg-bg-light overflow-hidden">
            <div className="relative z-10 flex w-full items-start justify-between mb-8">
              <span className="font-mono text-[12px] font-bold text-text-muted group-hover/col:text-primary transition-colors tracking-[0.3em] uppercase">STEP_{step.id}</span>
              <ArrowRight className="w-8 h-8 text-primary opacity-0 -translate-x-6 transition-all duration-500 group-hover/col:opacity-100 group-hover/col:translate-x-0" />
            </div>

            <h3 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-text-main leading-none break-words">
              <span className="block text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 opacity-10 group-hover/col:opacity-100 transition-all duration-500" style={{ WebkitTextStroke: '1px var(--color-text-main)' }}>{step.id}</span>
              {step.title}
            </h3>

            <div className="relative z-10 my-auto flex items-center justify-center py-8 sm:py-10 lg:py-0">
              <div className="relative flex w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 items-center justify-center border border-text-main/20 bg-white transition-all duration-500 group-hover/col:border-primary group-hover/col:bg-primary group-hover/col:scale-105 shadow-xl group-hover/col:shadow-primary/20">
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-text-main transition-colors duration-500 group-hover/col:text-white" />
                {i > 0 && <div className="absolute -left-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
                {i < steps.length - 1 && <div className="absolute -right-[200%] top-1/2 h-px w-[200%] bg-border-main opacity-20 group-hover/col:bg-primary/50 transition-colors lg:block hidden"></div>}
              </div>
            </div>

            <div className="relative z-10 mt-auto overflow-hidden opacity-100 transition-all duration-300">
              <div className="border-t border-dashed border-text-muted/30 pt-8">
                <h4 className="mb-3 font-display text-lg sm:text-xl font-bold text-text-main uppercase tracking-[0.1em] sm:tracking-[0.12em] break-words">{step.subtitle}</h4>
                <p className="font-body text-sm sm:text-base lg:text-lg leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
