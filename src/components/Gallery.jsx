import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const imgs = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546484959-f9a53db89f05?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1640&auto=format&fit=crop',
];

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section id="gallery" ref={ref} className="relative bg-[#0D0D0D] text-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Experience</h2>
          <p className="text-gray-300 mt-2">Step inside our world — premium design, immersive lighting, and elite energy.</p>
        </div>
      </div>
      <motion.div style={{ x }} className="flex gap-6 will-change-transform">
        {imgs.map((src, i) => (
          <div key={src} className="min-w-[60vw] sm:min-w-[40vw] lg:min-w-[30vw]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img src={src} alt={`Gym view ${i + 1}`} className="h-[40vh] w-full object-cover hover:scale-[1.03] transition-transform duration-500" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
