import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="h-[72px] sm:h-[80px] md:h-[90px] w-full flex items-center justify-between px-4 sm:px-6 md:px-16 border-b border-border-main sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <img src="/images/logo.png" alt="Minddeas Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
      </div>
      <nav className="hidden md:flex items-center gap-12">
        {['ABOUT', 'METHODOLOGY', 'CONTACT'].map((item) => (
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
        <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </header>
  );
}
