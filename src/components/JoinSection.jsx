import { motion } from 'framer-motion';

export default function JoinSection() {
  return (
    <section id="join" className="relative bg-[#0D0D0D] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Join Formula Fitness</h2>
          <p className="text-gray-300 mt-3 max-w-prose">Empowering you to push beyond limits. Choose your plan and get access to elite coaching, premium equipment, and immersive sessions.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[{ name: 'Elite', price: '$89/mo' }, { name: 'Pro', price: '$59/mo' }].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
                <div className="text-xl font-bold">{p.name}</div>
                <div className="text-3xl font-extrabold mt-2">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>Unlimited gym access</li>
                  <li>All classes included</li>
                  <li>Free onboarding session</li>
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-full bg-red-600 px-5 py-2 font-semibold shadow-lg shadow-red-600/40 hover:bg-red-500 transition">Choose {p.name}</a>
              </motion.div>
            ))}
          </div>
        </div>
        <form className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur grid gap-4">
          <h3 className="text-xl font-bold">Get in touch</h3>
          <input aria-label="Name" placeholder="Name" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 placeholder-white/50" />
          <input aria-label="Email" placeholder="Email" type="email" className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 placeholder-white/50" />
          <textarea aria-label="Message" placeholder="Tell us your goals" rows={4} className="rounded-lg bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 placeholder-white/50" />
          <button type="submit" className="rounded-full bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-600/40 hover:bg-red-500 transition">Request Membership</button>
          <p className="text-sm text-gray-400">Or call <a href="tel:+1234567890" className="text-white">+1 (234) 567-890</a></p>
        </form>
      </div>
    </section>
  );
}
