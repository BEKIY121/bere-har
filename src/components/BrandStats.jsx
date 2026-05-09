import React from 'react';
import { motion } from 'framer-motion';

const BrandStats = () => {
  const stats = [
    { number: '08', label: 'Years of Craft' },
    { number: '40+', label: 'Master Artisans' },
    { number: '18', label: 'Countries Reached' },
    { number: '100%', label: 'Handcrafted Silk' },
  ];

  return (
    <section style={{ backgroundColor: '#1A1A1A', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle watermark */}
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '30vw', color: 'rgba(255,255,255,0.02)', fontFamily: 'Playfair Display, serif', fontWeight: '300', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
        BH
      </span>
      <div className="container">
        <div className="brand-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
          {stats.map((stat, idx) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }}
              style={{ textAlign: 'center', padding: '2rem', borderRight: idx < 3 ? '1px solid rgba(235,230,223,0.08)' : 'none' }}>
              <h3 style={{ fontSize: '4rem', fontFamily: 'Playfair Display, serif', fontWeight: '300', color: 'var(--bg-cream)', lineHeight: 1, marginBottom: '0.8rem' }}>{stat.number}</h3>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(235,230,223,0.4)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStats;
