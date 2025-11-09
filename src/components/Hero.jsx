import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden bg-[#0D0D0D] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            Train. <span className="text-red-500">Transform.</span> Triumph.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200"
          >
            Strength in Motion — designed for those who demand excellence. Premium equipment, elite coaching, and immersive experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#join" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-xl shadow-red-600/40">
              <span className="absolute inset-0 -z-[1] scale-125 bg-gradient-to-r from-red-500 to-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              Join Now
            </a>
            <a href="#programs" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/10 transition">
              Explore Programs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating counters */}
      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 gap-4 -mt-10">
          {[
            { label: 'Active Members', value: 3200 },
            { label: 'Classes / Month', value: 180 },
            { label: 'Success Rate', value: '98%' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5"
            >
              <div className="text-3xl font-extrabold text-white">{item.value}</div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
