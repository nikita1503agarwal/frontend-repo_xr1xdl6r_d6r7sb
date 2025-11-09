import { motion } from 'framer-motion';

const trainers = [
  { name: 'Ava Stone', role: 'Strength Coach', certs: 'CSCS, USAW', img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1640&auto=format&fit=crop' },
  { name: 'Liam Cross', role: 'Performance Specialist', certs: 'NASM-PES', img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1640&auto=format&fit=crop' },
  { name: 'Maya Reed', role: 'Mobility & Yoga', certs: 'RYT-500', img: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc7?q=80&w=1640&auto=format&fit=crop' },
  { name: 'Noah Kade', role: 'HIIT & Conditioning', certs: 'ACE-CPT', img: 'https://images.unsplash.com/photo-1594385208973-6e1e1f7e1da9?q=80&w=1640&auto=format&fit=crop' },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-[#0D0D0D] text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Trainers</h2>
          <p className="text-gray-300 mt-2">Elite coaches with world-class credentials.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * idx }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <span className="text-xs text-white/70 px-2 py-0.5 rounded-full bg-white/10">{t.certs}</span>
                </div>
                <p className="text-red-400 text-sm mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
