import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG_20260509_100021_627.webp';
import img2 from '../assets/IMG_20260509_100022_237.webp';
import img3 from '../assets/IMG_20260509_100308_657.webp';

const FeaturedLook = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-cream)', position: 'relative', overflow: 'hidden', padding: 'clamp(4rem, 8vw, 10rem) 0' }}>
      
      {/* Watermark */}
      <span style={{ position: 'absolute', top: '10%', right: '-5%', fontSize: '20vw', color: 'rgba(26,26,26,0.02)', fontFamily: 'Playfair Display, serif', fontWeight: '300', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>
        LOOKBOOK
      </span>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Featured Silhouette</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1 }}>26 F/W Series</h2>
        </header>

        {/* Overlapping Asymmetric Grid */}
        <div className="look-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0', position: 'relative' }}>
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: '1 / 8', position: 'relative', zIndex: 1 }}
          >
            <div style={{ overflow: 'hidden', aspectRatio: '3/4' }}>
              <img src={img1} alt="Look 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', top: '2rem', left: '-2rem', zIndex: 5 }}>
              <p className="script-font" style={{ fontSize: '4rem', color: 'var(--accent-gold)', transform: 'rotate(-10deg)', textShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>The One.</p>
            </div>
          </motion.div>

          {/* Overlapping Small Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              gridColumn: '7 / 11', 
              marginTop: '15%', 
              position: 'relative', 
              zIndex: 3,
              boxShadow: '-20px 20px 50px rgba(0,0,0,0.1)' 
            }}
          >
            <div style={{ overflow: 'hidden', aspectRatio: '1/1', border: '10px solid var(--bg-cream)' }}>
              <img src={img2} alt="Look 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          {/* Overlapping Text Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ 
              gridColumn: '9 / 13', 
              marginTop: '-10%', 
              backgroundColor: 'var(--text-dark)', 
              color: 'var(--bg-cream)',
              padding: '3rem 2rem',
              position: 'relative', 
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '20px 20px 60px rgba(0,0,0,0.15)'
            }}
          >
            <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.6 }}>Artisan Craft</p>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>Individually Tailored</h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.7 }}>
              Each silhouette is draped by hand, ensuring that no two pieces are exactly alike. True bespoke resort-wear.
            </p>
          </motion.div>

          {/* Floating Third Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{ 
              gridColumn: '2 / 6', 
              marginTop: '-5%', 
              position: 'relative', 
              zIndex: 2,
              filter: 'grayscale(30%)'
            }}
          >
            <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src={img3} alt="Look 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .look-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .look-grid > div {
            grid-column: auto !important;
            width: 100% !important;
            margin: 0 !important;
          }
          .look-grid > div:nth-child(1) { order: 1; margin-bottom: 2rem !important; }
          .look-grid > div:nth-child(2) { 
            order: 2; 
            width: 70% !important; 
            margin-left: auto !important; 
            margin-top: -5rem !important; 
            z-index: 5 !important;
          }
          .look-grid > div:nth-child(3) { 
            order: 3; 
            margin-top: -3rem !important; 
            z-index: 6 !important;
            width: 90% !important;
            margin-left: 5% !important;
          }
          .look-grid > div:nth-child(4) { 
            order: 4; 
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedLook;
