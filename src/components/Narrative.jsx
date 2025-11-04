import React from 'react';
import { motion } from 'framer-motion';
import { Ship } from 'lucide-react';

const Narrative = () => {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      {/* Top wave */}
      <svg className="absolute -top-12 left-0 right-0 h-16 w-full text-[#EAF7FB]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32L48,58.7C96,85,192,139,288,165.3C384,192,480,192,576,170.7C672,149,768,107,864,106.7C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
            <Ship className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
            Born from the tides of a maritime nation
          </h2>
          <p className="mt-4 text-slate-700">
            Indonesia is an archipelago of infinite horizons, where the sea is both heritage and hope. In places like
            Cilacap, coastal life moves with the rhythm of the waves—yet many community services remain manual,
            non-transparent, and inefficient. ANGKARA (Angkutan Segara) rises from these daily currents: a digital
            platform inspired by empathy, designed to bridge tradition and technology for a smarter ocean economy.
          </p>
          <p className="mt-4 text-slate-700">
            In Javanese philosophy, Angkutan Segara means the carrier of life and connection. It symbolizes a movement
            of unity and care—linking fishermen, boat operators, and travelers in a shared journey toward inclusion,
            innovation, and sustainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mt-12 grid gap-6 rounded-3xl bg-gradient-to-br from-[#EAF7FB] via-[#E9FBF7] to-[#FFF4F3] p-8 shadow-sm ring-1 ring-sky-100 sm:grid-cols-2"
        >
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-sky-900">Vision & Origin</h3>
            <p className="text-slate-700">
              ANGKARA began as a response to the real challenges of coastal communities: manual boat rentals, uncertain
              prices, and limited access for tourists. By transforming offline processes into a gentle, transparent
              digital flow, ANGKARA brings clarity, trust, and opportunity to the water.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-sky-900">Concept & Goals</h3>
            <p className="text-slate-700">
              An online booking and management platform for maritime transportation and tourism, integrating verified
              listings, weather data, digital payments, and local empowerment. ANGKARA strengthens coastal economies,
              empowers operators, and encourages sustainable marine tourism.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 right-0 h-16 w-full rotate-180 text-[#FFF4F3]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,32L48,58.7C96,85,192,139,288,165.3C384,192,480,192,576,170.7C672,149,768,107,864,106.7C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </section>
  );
};

export default Narrative;
