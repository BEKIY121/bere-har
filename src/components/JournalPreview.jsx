import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG_20260509_100308_708.jpg';
import img2 from '../assets/IMG_20260509_100101_106.jpg';

const JournalPreview = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Typography */}
        <h2 style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '15vw',
          color: 'rgba(26, 26, 26, 0.03)',
          margin: 0,
          fontFamily: 'Playfair Display, serif',
          fontWeight: '400',
          letterSpacing: '0.05em',
          zIndex: 0,
          whiteSpace: 'nowrap'
        }}>
          JOURNAL
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', zIndex: 1 }}>
          
          {/* Left Side: Text and Small Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <p className="script-font" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', transform: 'rotate(-3deg)', marginBottom: '1rem' }}>
              Latest Editorial.
            </p>
            <h3 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              The Coastal<br/>Symphony
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '400px', marginBottom: '3rem' }}>
              Explore the delicate intersection of oceanic textures and lightweight silks. Our latest editorial journey takes us to the raw coastlines, where every piece interacts with the natural breeze.
            </p>
            
            <div style={{ width: '60%', position: 'relative' }}>
              <img src={img2} alt="Editorial Detail" style={{ width: '100%', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.1))' }} />
              <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-2rem', width: '80px', height: '1px', backgroundColor: 'var(--text-dark)' }} />
            </div>
          </motion.div>

          {/* Right Side: Large Vertical Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}
          >
             <div style={{ width: '80%', position: 'relative' }}>
               <img src={img1} alt="Journal Main" style={{ width: '100%', height: '700px', objectFit: 'cover' }} />
               <a href="#journal" style={{
                 position: 'absolute',
                 bottom: '2rem',
                 left: '-2rem',
                 backgroundColor: 'var(--bg-cream)',
                 padding: '1rem 2rem',
                 fontSize: '0.7rem',
                 textTransform: 'uppercase',
                 letterSpacing: '0.2em',
                 fontWeight: '500',
                 border: '1px solid rgba(26,26,26,0.1)'
               }}>
                 Read Full Story →
               </a>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JournalPreview;
