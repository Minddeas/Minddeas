import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="h-[90px] w-full flex items-center justify-between px-6 md:px-16 border-b border-border-main sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <img src="/images/hf_20260302_190926_0216cdcf-770b-434b-a9e7-c925ef702cc4.png" alt="Minddeas Logo" className="h-12 w-auto" />
      </div>
      <nav className="hidden md:flex items-center gap-12">
        {['ABOUT', 'SERVICES', 'METHODOLOGY', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="relative font-display font-bold text-[14px] uppercase tracking-[0.2em] text-text-main hover:text-primary transition-all group">
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </nav>
      <button className="hidden md:flex items-center bg-primary px-10 h-12 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-white hover:bg-text-main transition-all shadow-lg shadow-primary/10">
        START DIAGNOSTIC
      </button>
      <button className="md:hidden text-text-main">
        <Menu className="w-8 h-8" />
      </button>
    </header>
  );
}
