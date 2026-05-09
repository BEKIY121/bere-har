import React from 'react';
import { motion } from 'framer-motion';

const Atelier = () => {
  const steps = [
    { num: '01', title: 'The Sun', desc: 'Inspired by golden hours, our palettes are curated to reflect the warmth of coastal evenings.' },
    { num: '02', title: 'The Waves', desc: 'Fluid, unpredictable, and powerful. We cut our silks to move naturally with the body.' },
    { num: '03', title: 'The Wind', desc: 'Weightless materials that catch the breeze, ensuring absolute comfort and breathability.' }
  ];

  return (
    <section style={{ paddingTop: 'clamp(100px, 15vh, 15vh)', minHeight: '100vh', backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8rem, 8rem)' }}
        >
          <p className="script-font" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-muted)' }}>The Process</p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', marginTop: '-1rem' }}>Atelier</h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6rem, 6rem)', maxWidth: '800px', margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ display: 'grid', gridTemplateColumns: 'clamp(60px, 100px, 100px) 1fr', gap: 'clamp(1.5rem, 3rem, 3rem)', alignItems: 'baseline' }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'rgba(26,26,26,0.1)', fontFamily: 'Inter, sans-serif', fontWeight: '800' }}>
                {step.num}
              </h2>
              <div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Atelier;
