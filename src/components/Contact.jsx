import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for reaching out. We will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#FFF4F3] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
            Join us in building Indonesia’s digital ocean economy
          </h2>
          <p className="mt-3 text-slate-700">
            We welcome collaboration with communities, institutions, and partners who believe in inclusive,
            sustainable maritime innovation.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-sky-100 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-sky-900">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-sky-100 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 placeholder:text-slate-400 focus:ring-2"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-sky-900">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-sky-100 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 placeholder:text-slate-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-sky-900">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-xl border border-sky-100 bg-white/80 px-3 py-2 text-sm text-slate-800 outline-none ring-sky-200 placeholder:text-slate-400 focus:ring-2"
                placeholder="Tell us how you’d like to collaborate..."
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button
                type="submit"
                className="rounded-full bg-sky-600/90 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Send message
              </button>
              {status && <p className="text-sm text-emerald-700">{status}</p>}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-gradient-to-br from-[#EAF7FB] via-[#E9FBF7] to-[#FFF4F3] p-6 ring-1 ring-white/60"
          >
            <h3 className="text-lg font-semibold text-sky-900">Connect with ANGKARA</h3>
            <p className="mt-2 text-sm text-slate-700">
              For partnerships, pilots, or support, reach out to our team. Let’s co-create better access, transparency,
              and safety across Indonesia’s waters.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a className="block text-sky-700 underline-offset-4 hover:underline" href="#">Instagram</a>
              <a className="block text-sky-700 underline-offset-4 hover:underline" href="#">LinkedIn</a>
              <a className="block text-sky-700 underline-offset-4 hover:underline" href="#">Twitter / X</a>
              <a className="block text-sky-700 underline-offset-4 hover:underline" href="#">Email</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 flex max-w-6xl items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-700 ring-1 ring-sky-100 backdrop-blur sm:px-6"
        >
          <p>
            © {new Date().getFullYear()} ANGKARA. Made with <Heart className="inline h-4 w-4 text-rose-500" aria-label="heart" /> for coastal communities.
          </p>
          <a href="#top" className="text-sky-700 underline-offset-4 hover:underline">Back to top</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
