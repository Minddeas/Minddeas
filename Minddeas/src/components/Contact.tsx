import { useEffect, useState } from 'react';
import { Mail, Calendar, MapPin, Share2, ArrowRight, ArrowUp, Check } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/p/2949986910493211753/f/contactForm';
const BOOKING_URL = 'mailto:geral@minddeas.com?subject=Book%20a%20session';

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === '1') {
      setShowSuccess(true);
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  return (
    <section id="contact" className="w-full flex flex-col bg-bg-light">
      <div className="flex flex-col lg:flex-row w-full border-b border-border-main min-h-[560px]">
        <div className="w-full lg:w-1/2 flex flex-col lg:border-r border-border-main bg-white">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex-1 flex flex-col justify-center bg-bg-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 -mr-40 -mt-40 rotate-12"></div>
            <div className="bg-text-main text-white font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 w-fit mb-8 relative z-10">
              CONTACT
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-[0.95] tracking-tight text-text-main mb-6 sm:mb-8 md:mb-10 relative z-10 break-words">
              Let&apos;s discuss <br/> your business
            </h2>
            <p className="font-body text-base sm:text-lg md:text-lg lg:text-xl text-text-muted max-w-2xl leading-relaxed relative z-10 font-medium">
              Share your current context and key challenges. We will follow up with a clear, practical recommendation for the next steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border-main bg-white">
            <div className="p-5 sm:p-6 md:p-7 lg:p-8 border-b md:border-b-0 md:border-r border-border-main flex flex-col min-h-[150px] sm:min-h-[170px] md:min-h-[185px] group hover:bg-bg-light transition-all duration-500">
              <Mail className="w-9 h-9 text-primary mb-auto group-hover:scale-105 transition-transform origin-left" />
              <div className="mt-6 sm:mt-7 md:mt-8">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] block mb-4 font-bold">EMAIL</span>
                <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-main group-hover:text-primary transition-colors break-all">geral@minddeas.com</span>
              </div>
            </div>
            <div className="p-5 sm:p-6 md:p-7 lg:p-8 border-b md:border-b-0 border-border-main flex flex-col min-h-[150px] sm:min-h-[170px] md:min-h-[185px] group hover:bg-bg-light transition-all duration-500">
              <Calendar className="w-9 h-9 text-primary mb-auto group-hover:scale-105 transition-transform origin-left" />
              <div className="mt-6 sm:mt-7 md:mt-8">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] block mb-4 font-bold">SCHEDULING</span>
                <a
                  href={BOOKING_URL}
                  className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-main group-hover:text-primary transition-colors inline-flex w-fit"
                >
                  Book a session
                </a>
              </div>
            </div>
            <div className="p-5 sm:p-6 md:p-7 lg:p-8 border-t border-b md:border-b-0 md:border-r border-border-main flex flex-col min-h-[150px] sm:min-h-[170px] md:min-h-[185px] group hover:bg-bg-light transition-all duration-500">
              <MapPin className="w-9 h-9 text-primary mb-auto group-hover:scale-105 transition-transform origin-left" />
              <div className="mt-6 sm:mt-7 md:mt-8">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] block mb-4 font-bold">LOCATION</span>
                <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-main group-hover:text-primary transition-colors break-words">Lisbon, Portugal</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/minddeas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 md:p-7 lg:p-8 border-t border-border-main flex flex-col min-h-[150px] sm:min-h-[170px] md:min-h-[185px] group hover:bg-bg-light transition-all duration-500 cursor-pointer"
              aria-label="Open Minddeas LinkedIn"
            >
              <Share2 className="w-9 h-9 text-primary mb-auto group-hover:scale-105 transition-transform origin-left" />
              <div className="mt-6 sm:mt-7 md:mt-8">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-[0.3em] block mb-4 font-bold">SOCIAL</span>
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
                  <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-main group-hover:text-primary transition-colors">LinkedIn</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-white flex flex-col justify-center">
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="flex flex-col gap-8 max-w-4xl w-full mx-auto"
          >
            <input type="hidden" name="_subject" value="New contact - Minddeas" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}?success=1#contact` : ''} />
            <div className="flex flex-col gap-4">
              <label htmlFor="fullName" className="font-mono text-[12px] font-bold text-text-main uppercase tracking-[0.2em]">[01] FULL NAME</label>
              <input id="fullName" type="text" name="fullName" placeholder="Your full name" required className="w-full h-12 sm:h-14 md:h-16 border border-border-main bg-transparent px-4 sm:px-5 md:px-6 font-mono text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:opacity-30" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-4">
                <label htmlFor="company" className="font-mono text-[12px] font-bold text-text-main uppercase tracking-[0.2em]">[02] COMPANY</label>
                <input id="company" type="text" name="company" placeholder="Company name" className="w-full h-12 sm:h-14 md:h-16 border border-border-main bg-transparent px-4 sm:px-5 md:px-6 font-mono text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:opacity-30" />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="position" className="font-mono text-[12px] font-bold text-text-main uppercase tracking-[0.2em]">[03] POSITION</label>
                <input id="position" type="text" name="position" placeholder="Your role" className="w-full h-12 sm:h-14 md:h-16 border border-border-main bg-transparent px-4 sm:px-5 md:px-6 font-mono text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:opacity-30" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="font-mono text-[12px] font-bold text-text-main uppercase tracking-[0.2em]">[04] EMAIL ADDRESS</label>
              <input id="email" type="email" name="email" placeholder="name@company.com" required className="w-full h-12 sm:h-14 md:h-16 border border-border-main bg-transparent px-4 sm:px-5 md:px-6 font-mono text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:opacity-30" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <label htmlFor="mainChallenge" className="font-mono text-[12px] font-bold text-text-main uppercase tracking-[0.2em]">[05] MAIN_CHALLENGE</label>
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest opacity-50 font-bold">MAX 500 CHARS</span>
              </div>
              <textarea id="mainChallenge" name="mainChallenge" placeholder="Briefly describe your current challenge." maxLength={500} className="w-full h-36 sm:h-40 md:h-44 border border-border-main bg-transparent p-4 sm:p-5 md:p-6 font-mono text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:opacity-30"></textarea>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="relative flex items-center mt-1">
                <input id="newsletter" type="checkbox" name="newsletter" value="yes" className="peer appearance-none w-8 h-8 border border-border-main rounded-none checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                <Check className="absolute w-6 h-6 text-white opacity-0 peer-checked:opacity-100 left-1 transition-opacity pointer-events-none" />
              </div>
              <label htmlFor="newsletter" className="font-body text-base lg:text-lg text-text-muted leading-snug select-none cursor-pointer group-hover:text-text-main transition-colors font-medium">I agree to receive occasional market intelligence reports.</label>
            </div>

            {showSuccess && (
              <div className="p-6 border border-primary bg-primary/5 font-mono text-primary font-bold uppercase tracking-widest text-center">
                MESSAGE SENT SUCCESSFULLY
              </div>
            )}
            <button type="submit" className="w-full bg-primary text-white h-14 sm:h-16 md:h-18 font-display font-bold text-sm sm:text-base lg:text-xl uppercase tracking-[0.1em] sm:tracking-[0.14em] lg:tracking-[0.2em] flex items-center justify-center gap-3 sm:gap-4 md:gap-5 hover:bg-text-main transition-all duration-500 mt-2 shadow-xl shadow-primary/10">
              <span className="break-words text-center">SUBMIT</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 shrink-0" />
            </button>
          </form>
        </div>
      </div>

      <footer className="w-full grid grid-cols-1 md:grid-cols-4 bg-white border-t border-border-main">
        <div className="p-5 sm:p-6 md:p-8 flex items-center justify-center group hover:bg-bg-light transition-colors">
          <span className="font-mono text-[11px] md:text-[12px] text-text-muted uppercase tracking-[0.12em] md:tracking-[0.3em] font-bold group-hover:text-text-main transition-colors text-center break-words">MINDDEAS © 2026</span>
        </div>
        <div className="p-5 sm:p-6 md:p-8 flex items-center justify-center group hover:bg-bg-light transition-colors cursor-pointer">
          <span className="font-mono text-[11px] md:text-[12px] text-text-muted uppercase tracking-[0.12em] md:tracking-[0.3em] font-bold group-hover:text-text-main transition-colors text-center break-words">PRIVACY POLICY</span>
        </div>
        <div className="p-5 sm:p-6 md:p-8 flex items-center justify-center group hover:bg-bg-light transition-colors cursor-pointer">
          <span className="font-mono text-[11px] md:text-[12px] text-text-muted uppercase tracking-[0.12em] md:tracking-[0.3em] font-bold group-hover:text-text-main transition-colors text-center break-words">TERMS OF SERVICE</span>
        </div>
        <div className="p-5 sm:p-6 md:p-8 flex items-center justify-center group hover:bg-bg-light transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className="font-mono text-[11px] md:text-[12px] text-text-main uppercase tracking-[0.12em] md:tracking-[0.3em] font-bold flex items-center gap-2 sm:gap-3 text-center">
            BACK TO TOP <ArrowUp className="w-5 h-5 group-hover:-translate-y-2 transition-transform duration-300" />
          </button>
        </div>
      </footer>
    </section>
  );
}
