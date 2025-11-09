import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import JoinSection from './components/JoinSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Gallery />
        <JoinSection />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Formula Fitness. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#trainers" className="hover:text-white">Trainers</a>
            <a href="#join" className="hover:text-white">Join</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
