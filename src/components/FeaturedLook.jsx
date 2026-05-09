import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG_20260509_100021_627.jpg';
import img2 from '../assets/IMG_20260509_100022_237.jpg';
import img3 from '../assets/IMG_20260509_100308_657.jpg';

const FeaturedLook = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-cream)', position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      
      {/* Watermark */}
      <span style={{ position: 'absolute', bottom: '5%', right: '-5%', fontSize: '18vw', color: 'rgba(26,26,26,0.025)', fontFamily: 'Playfair Display, serif', fontWeight: '300', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>
        LOOK
      </span>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>26 F/W Season</p>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1 }}>The Featured Look</h2>
          </div>
          <a href="/shop" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', borderBottom: '1px solid var(--text-dark)', paddingBottom: '0.3rem' }}>
            View All →
          </a>
        </motion.div>

        {/* Asymmetric Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '1.5rem', alignItems: 'end' }}>
          
          {/* Large Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', height: '650px' }}>
              <img src={img1} alt="Featured 1" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ position: 'absolute', bottom: '2rem', left: '1.5rem' }}>
              <span style={{ backgroundColor: 'var(--bg-cream)', padding: '0.5rem 1rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>New Season</span>
            </div>
          </motion.div>

          {/* Right Two Stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 }} style={{ overflow: 'hidden', height: '300px' }}>
              <img src={img2} alt="Featured 2" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.25 }}
              style={{ padding: '1.5rem', border: '1px solid rgba(26,26,26,0.1)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>Artisan Note</p>
              <p className="script-font" style={{ fontSize: '1.8rem' }}>Made by hand.</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Each piece is individually crafted by our atelier team in Asmara, taking 3–5 days to complete.</p>
            </motion.div>
          </div>

          {/* Third Column */}
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} style={{ overflow: 'hidden', height: '480px', marginTop: '5rem' }}>
            <img src={img3} alt="Featured 3" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLook;
