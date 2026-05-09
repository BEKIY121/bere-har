import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, Feather, Waves } from 'lucide-react';

const features = [
  { icon: <Feather />, title: 'Weightless Silk', desc: 'Crafted to feel like a second skin, perfect for sun-drenched afternoons on the shore.' },
  { icon: <Wind />, title: 'Breathable Weave', desc: 'Organic textures that allow natural airflow and cooling comfort in any climate.' },
  { icon: <Sun />, title: 'Sunlit Tones', desc: 'Dyed using natural, sustainable pigments inspired by the warm hues of coastal sunsets.' },
  { icon: <Waves />, title: 'Fluid Motion', desc: 'Designed to drape elegantly and move gracefully with every step you take.' },
];

const Craft = () => {
  return (
    <section id="craft" style={{ background: 'var(--bg-cream)', padding: '10rem 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-end', marginBottom: '7rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>The Atelier</p>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', fontWeight: '400', color: 'var(--text-dark)', lineHeight: 1 }}>
              The Coastal<br/>Craft
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Every Bere Har garment is a testament to patience and passion. Each thread is chosen, woven, and finished by the hands of our master artisans in the coastal workshops of East Africa.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '8rem' }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ paddingTop: '2rem', borderTop: '1px solid rgba(26,26,26,0.1)' }}
            >
              <div style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', opacity: 0.6 }}>
                {React.cloneElement(f.icon, { size: 28, strokeWidth: 1 })}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-dark)', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.8rem' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Large Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', padding: '5rem 4rem', borderTop: '1px solid rgba(26,26,26,0.08)', borderBottom: '1px solid rgba(26,26,26,0.08)' }}
        >
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '2rem', color: 'var(--text-dark)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.5, fontWeight: '300' }}>
            "Our pieces are designed not just to be worn, but to be lived in — where the sand meets the sea, and art meets fashion."
          </p>
          <p className="script-font" style={{ marginTop: '2.5rem', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
            — Bere Har Atelier
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Craft;
