import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to tint the ocean scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#DFF6FF]/70 via-[#E9FBF7]/50 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur"
        >
          ANGKARA — Angkutan Segara
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="font-['Mona_Sans',Inter,ui-sans-serif] text-5xl font-extrabold tracking-tight text-sky-900 drop-shadow-sm sm:text-6xl"
        >
          ANGKARA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mt-3 max-w-3xl text-base text-sky-900/80 sm:text-lg"
        >
          Connecting the sea, fishermen, and travelers in one movement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base"
        >
          ANGKARA is a smart maritime economy platform designed to modernize Indonesia’s ocean sector—linking
          fishermen, boat operators, and tourists through an accessible, transparent, and safe online reservation
          system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#story"
            className="rounded-full bg-sky-600/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Explore the Story
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-sky-800 shadow ring-1 ring-sky-200 backdrop-blur transition hover:bg-white"
          >
            Partner with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
