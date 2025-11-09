import { motion } from 'framer-motion';
import { Dumbbell, Flame, HeartPulse, Sparkles, User } from 'lucide-react';

const items = [
  { title: 'Strength', icon: Dumbbell, desc: 'Build raw power with progressive overload and compound lifts.' },
  { title: 'Cardio', icon: HeartPulse, desc: 'Conditioning that elevates endurance and heart health.' },
  { title: 'HIIT', icon: Flame, desc: 'Explosive intervals to burn fat and boost performance.' },
  { title: 'Yoga', icon: Sparkles, desc: 'Mobility, balance, and breath for total-body harmony.' },
  { title: 'Personal Training', icon: User, desc: 'One-on-one coaching tailored to your goals.' },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-[#0D0D0D] text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Programs</h2>
          <p className="text-gray-300 mt-2">Redefine your limits with curated training tracks.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * idx }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center shadow-lg shadow-red-600/40">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-300">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <a href="#join" className="text-red-400 hover:text-red-300 font-semibold">View schedules</a>
                <a href="#join" className="text-white/80 hover:text-white font-medium">Pricing →</a>
              </div>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-red-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
