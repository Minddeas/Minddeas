import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-bg-light text-text-main font-body overflow-x-hidden min-h-screen flex flex-col items-center">
      <div className="w-full flex flex-col min-h-screen bg-surface border-border-main shadow-2xl">
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          <Hero />
          <Stats />
          <Services />
          <Process />
          <Contact />
        </main>
      </div>
    </div>
  );
}
