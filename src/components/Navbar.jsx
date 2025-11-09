import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Dumbbell, Users, Phone } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#programs', label: 'Programs' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#join', label: 'Join' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = links.map(l => document.querySelector(l.href));
      const pos = window.scrollY + window.innerHeight / 3;
      for (const sec of sections) {
        if (!sec) continue;
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (pos >= top && pos < bottom) {
          setActive(`#${sec.id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-600 to-red-400 shadow-lg shadow-red-500/30 flex items-center justify-center">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-extrabold tracking-wide text-lg">Formula <span className="text-red-500">Fitness</span></span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative text-sm uppercase tracking-wide transition-colors ${
                  active === href ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
                {active === href && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-red-500 shadow-[0_0_12px] shadow-red-500/70" />
                )}
              </a>
            ))}
            <a href="#join" className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-600/40 hover:shadow-red-500/60 hover:bg-red-500 transition flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Join Now
            </a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-3">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 ${
                  active === href ? 'text-white' : 'text-gray-300'
                }`}
              >
                {label}
              </a>
            ))}
            <a href="#join" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-center bg-red-600 text-white font-semibold shadow-lg shadow-red-600/40">
              Join Formula Fitness
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
