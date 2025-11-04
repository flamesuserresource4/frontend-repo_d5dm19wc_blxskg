import React from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FBFF] via-[#F2FAFA] to-[#FFF9F7] text-slate-800">
      <Hero />
      <Narrative />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
