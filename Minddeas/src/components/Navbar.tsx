import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'SERVICES', href: '#services' },
  { label: 'METHODOLOGY', href: '#methodology' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lockHeaderVisible, setLockHeaderVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = () => {
    setShowHeader(true);
    if (isDesktop) {
      setLockHeaderVisible(true);
    }
    closeMenu();
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let upScrollAccumulated = 0;
    let lastUpScrollAt = 0;
    const revealThreshold = 340;
    const minScrollForReveal = 290;
    const maxUpScrollGapMs = 140;

    const onDirectionScroll = () => {
      if (!isDesktop) {
        setShowHeader(true);
        lastScrollY = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const now = Date.now();
      const isAtTop = currentScrollY <= 12;
      const delta = currentScrollY - lastScrollY;
      const scrollingUp = delta < 0;

      if (scrollingUp) {
        if (lastUpScrollAt === 0 || now - lastUpScrollAt > maxUpScrollGapMs) {
          // Require a continuous upward gesture, not separated small bumps.
          upScrollAccumulated = Math.abs(delta);
        } else {
          upScrollAccumulated += Math.abs(delta);
        }
        lastUpScrollAt = now;
      } else if (delta > 0) {
        upScrollAccumulated = 0;
        lastUpScrollAt = 0;
      }

      if (
        isAtTop ||
        isMenuOpen ||
        lockHeaderVisible ||
        (currentScrollY > minScrollForReveal && upScrollAccumulated >= revealThreshold)
      ) {
        setShowHeader(true);
      } else if (delta > 0 && currentScrollY > 96) {
        setShowHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onDirectionScroll, { passive: true });
    return () => window.removeEventListener('scroll', onDirectionScroll);
  }, [isDesktop, isMenuOpen, lockHeaderVisible]);

  useEffect(() => {
    if (!lockHeaderVisible || !isDesktop) return;

    let touchStartY = 0;

    const unlockOnManualDownIntent = () => {
      setLockHeaderVisible(false);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        unlockOnManualDownIntent();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', 'End', ' '].includes(event.key)) {
        unlockOnManualDownIntent();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      if (currentY < touchStartY - 8) {
        unlockOnManualDownIntent();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [isDesktop, lockHeaderVisible]);

  return (
    <>
      <header
        className={`h-[72px] sm:h-[80px] md:h-[76px] lg:h-[88px] w-full grid grid-cols-[auto_1fr_auto] items-center px-3 sm:px-5 md:px-6 lg:px-12 fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/86 backdrop-blur-lg border-b border-border-main/20 shadow-[0_8px_24px_rgba(0,0,0,0.05)]'
            : 'bg-white/78 backdrop-blur-md border-b border-border-main/15'
        }`}
      >
        <a href="#about" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src="/images/logo.png" alt="" className="h-8 sm:h-9 md:h-8 lg:h-10 w-auto" aria-hidden />
          <span
            className="text-xl sm:text-2xl md:text-[27px] lg:text-4xl leading-none font-semibold tracking-tight select-none"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
            aria-label="Minddeas"
          >
            <span className="text-text-main">Mind</span>
            <span className="text-primary">deas</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={handleNavClick} className="relative font-display font-bold text-[12px] xl:text-[14px] uppercase tracking-[0.16em] xl:tracking-[0.2em] text-text-main/90 hover:text-primary transition-all group">
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <a href="#contact" onClick={handleNavClick} className="hidden lg:flex items-center bg-primary px-5 xl:px-7 2xl:px-10 h-10 xl:h-11 2xl:h-12 font-display text-[10px] xl:text-[11px] 2xl:text-[12px] font-bold uppercase tracking-[0.14em] xl:tracking-[0.16em] 2xl:tracking-[0.2em] text-white hover:bg-text-main transition-all shadow-lg shadow-primary/15">
            START DIAGNOSTIC
          </a>
          <button
            className={`lg:hidden text-text-main rounded-sm transition-colors ${isMenuOpen ? 'text-primary' : ''}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-sidebar-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7" />}
          </button>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] md:top-[76px] bottom-0 z-[70] transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="absolute inset-0 bg-black/30"
        />
        <aside
          id="mobile-sidebar-menu"
          className={`absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-white border-l border-border-main shadow-2xl overflow-y-auto transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-6 py-5 border-b border-border-main">
            <span className="font-display font-bold text-[13px] uppercase tracking-[0.16em] text-text-main">
              Menu
            </span>
          </div>

          <nav className="flex flex-col p-5 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 border border-border-main/15 font-display font-bold text-[13px] uppercase tracking-[0.12em] text-text-main hover:bg-bg-light hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-3 h-11 bg-primary text-white font-display font-bold text-[11px] uppercase tracking-[0.14em] flex items-center justify-center hover:bg-text-main transition-colors"
            >
              START DIAGNOSTIC
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}
