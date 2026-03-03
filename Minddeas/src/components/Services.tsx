import { Network, Settings, DollarSign, Terminal, MousePointerClick, Users } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'STRATEGY',
    name: 'ORGANIZATIONAL RESTRUCTURING',
    desc: 'Long-term data-driven planning. OKR definition and executive vision alignment.',
    icon: Network
  },
  {
    id: '02',
    title: 'OPERATIONS',
    name: 'PROCESS OPTIMIZATION',
    desc: 'Supply chain and logistics for maximum efficiency. Elimination of production bottlenecks.',
    icon: Settings
  },
  {
    id: '03',
    title: 'FINANCIAL',
    name: 'FINANCIAL MODELING',
    desc: 'Valuation, rigorous cash flow management, and economic scenario projection.',
    icon: DollarSign
  },
  {
    id: '04',
    title: 'TECHNOLOGY',
    name: 'DIGITAL TRANSFORMATION',
    desc: 'ERP implementation, repetitive task automation, and data architecture.',
    icon: Terminal
  },
  {
    id: '05',
    title: 'MARKETING',
    name: 'GROWTH & ACQUISITION',
    desc: 'B2B brand positioning, growth hacking, and customer retention strategies.',
    icon: MousePointerClick
  },
  {
    id: '06',
    title: 'PEOPLE',
    name: 'CULTURE & TALENTS',
    desc: 'Performance management, organizational culture definition, and productivity KPIs.',
    icon: Users
  }
];

export function Services() {
  return (
    <section id="services" className="w-full flex flex-col border-b border-border-main bg-bg-light">
      <div className="flex flex-col md:flex-row w-full border-b border-border-main">
        <div className="w-full md:w-1/2 p-8 md:p-24 lg:p-32 border-b md:border-b-0 md:border-r border-border-main bg-white">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-5 h-5 bg-primary"></div>
            <span className="font-mono text-[12px] text-text-muted uppercase tracking-[0.3em] font-bold">OUR EXPERTISE</span>
          </div>
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-text-main">
            BUSINESS <br/> ARCHITECTURE
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-24 lg:p-32 bg-white flex items-end">
          <p className="font-mono text-base md:text-lg text-text-muted border-l-2 border-primary pl-10 max-w-xl leading-relaxed font-medium">
            // SERVICE SYSTEM v.2.0 <br/>
            We structure companies through six fundamental pillars of efficiency and control.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {services.map((s, i) => (
          <div key={s.id} className={`p-16 lg:p-20 bg-white border-b border-border-main ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''} flex flex-col h-full min-h-[450px] group hover:bg-text-main transition-all duration-500 relative overflow-hidden`}>
            <div className="flex justify-between items-start mb-20 relative z-10">
              <span className="font-mono text-[12px] font-bold text-text-muted group-hover:text-primary transition-colors tracking-[0.2em]">{s.id} — {s.title}</span>
              <s.icon className="w-10 h-10 text-text-main group-hover:text-white transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="mt-auto relative z-10">
              <h3 className="font-display font-bold text-4xl lg:text-5xl uppercase text-text-main mb-8 group-hover:text-white transition-colors leading-tight">{s.name}</h3>
              <p className="font-body text-lg lg:text-xl text-text-muted group-hover:text-white/70 transition-colors leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 -mr-24 -mt-24 rounded-full group-hover:bg-primary/10 transition-all duration-700 group-hover:scale-150"></div>
          </div>
        ))}
      </div>
      
      <div className="w-full flex justify-between items-center px-16 py-10 border-t border-border-main bg-white">
        <div className="flex gap-4">
          <div className="w-3 h-3 bg-text-main opacity-20"></div>
          <div className="w-3 h-3 bg-text-main opacity-40"></div>
          <div className="w-3 h-3 bg-primary"></div>
        </div>
        <span className="font-mono text-[12px] text-text-muted uppercase tracking-[0.4em] font-bold">SYSTEM STATUS: ONLINE</span>
      </div>
    </section>
  );
}
