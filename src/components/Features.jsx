import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Calendar, Calculator, CloudRain, CreditCard, MessageCircle, BarChart3, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Verified Boat Listings',
    desc: 'Profiles validated with KSOP standards to ensure safety and trust for every journey.',
    icon: Shield,
    color: 'from-sky-100 to-sky-50',
  },
  {
    title: 'Smart Booking Calendar',
    desc: 'Schedule shared trips effortlessly with availability, capacity, and timing in one view.',
    icon: Calendar,
    color: 'from-teal-100 to-teal-50',
  },
  {
    title: 'Transparent Fare Calculator',
    desc: 'Fair, upfront pricing based on distance, capacity, and operational factors—no surprises.',
    icon: Calculator,
    color: 'from-emerald-100 to-emerald-50',
  },
  {
    title: 'Real-time Weather Alerts',
    desc: 'Up-to-date conditions powered by BMKG data to guide safe and informed decisions.',
    icon: CloudRain,
    color: 'from-cyan-100 to-cyan-50',
  },
  {
    title: 'Secure Digital Payments',
    desc: 'Escrow protection and digital receipts to protect both travelers and local operators.',
    icon: CreditCard,
    color: 'from-rose-100 to-rose-50',
  },
  {
    title: 'Live Chat with Translation',
    desc: 'Built-in translation assists foreign tourists and simplifies coordination on the go.',
    icon: MessageCircle,
    color: 'from-indigo-100 to-indigo-50',
  },
  {
    title: 'Insightful Analytics',
    desc: 'Dashboards for operators and government stakeholders to monitor trends and impact.',
    icon: BarChart3,
    color: 'from-amber-100 to-amber-50',
  },
];

const Features = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E9FBF7] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Designed for safety, clarity, and care</h2>
          <p className="mt-3 text-slate-700">
            A gentle but powerful toolkit that serves coastal communities and travelers alike—crafted with oceanic
            calm, pastel warmth, and motion that feels like waves.
          </p>
        </motion.div>

        <div className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="snap-center sm:snap-none"
            >
              <div className={`h-full rounded-2xl bg-gradient-to-b ${f.color} p-6 ring-1 ring-white/60 shadow-sm`}>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-sky-700 shadow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-sky-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 max-w-3xl rounded-3xl bg-white/70 p-6 text-center shadow-sm ring-1 ring-sky-100 backdrop-blur"
        >
          <div className="mx-auto flex items-center justify-center gap-2 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Impact</span>
          </div>
          <p className="mt-3 text-slate-700">
            ANGKARA is more than a booking tool—it’s a movement born from Cilacap’s coastal culture. It empowers
            fishermen without boats, stabilizes operator income, and offers travelers a safe, modern way to explore
            Indonesia’s maritime beauty.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
