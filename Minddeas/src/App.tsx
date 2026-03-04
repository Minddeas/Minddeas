import { FormspreeProvider } from '@formspree/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { Contact } from './components/Contact';

const formspreeProjectId = import.meta.env.VITE_FORMSPREE_PROJECT_ID || import.meta.env.VITE_FORMSPREE_FORM_ID || '2949986910493211753';

export default function App() {
  return (
    <FormspreeProvider project={formspreeProjectId}>
    <div className="bg-bg-light text-text-main font-body overflow-x-hidden min-h-screen flex flex-col items-center">
      <div className="w-full flex flex-col min-h-screen bg-surface border-border-main shadow-2xl">
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          <Hero />
          <Stats />
          <Process />
          <Contact />
        </main>
      </div>
    </div>
    </FormspreeProvider>
  );
}
