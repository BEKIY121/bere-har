import React from 'react';
import { motion } from 'framer-motion';
import storyImg from '../assets/IMG_20260509_100314_517.webp';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <section id="philosophy" style={{ background: 'var(--bg-cream)', padding: 'clamp(4rem, 8vw, 8rem) 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="story-layout" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="story-image-wrapper"
            style={{ flex: '0 0 60%', position: 'relative', zIndex: 1 }}
          >
            <div style={{ position: 'absolute', top: '-2rem', left: '-2rem', width: 'clamp(100px, 15vw, 180px)', height: 'clamp(100px, 15vw, 180px)', backgroundColor: 'rgba(213,200,186,0.3)', borderRadius: '50%', zIndex: 0 }} />
            <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
              <img 
                src={storyImg} 
                alt="Bere Har Campaign" 
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '650px', objectFit: 'cover' }} 
              />
            </div>
            
            {/* Artistic Badge Overlay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', bottom: '2rem', left: '-1rem',
                width: 'clamp(80px, 10vw, 110px)', height: 'clamp(80px, 10vw, 110px)', borderRadius: '50%',
                border: '1px solid rgba(26,26,26,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5,
                backgroundColor: 'var(--bg-cream)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4 }}>
                Atelier<br/>Handmade
              </span>
            </motion.div>
          </motion.div>

          {/* Text Container - Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="story-text-wrapper"
            style={{ 
              flex: '0 0 50%', 
              marginLeft: '-10%', 
              position: 'relative', 
              zIndex: 2,
              backgroundColor: 'var(--bg-cream)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              boxShadow: '20px 20px 60px rgba(0,0,0,0.03)'
            }}
          >
            <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our Philosophy
            </p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1, marginBottom: '2rem', color: 'var(--text-dark)' }}>
              Where Sand<br/>Meets Silk
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.5rem', maxWidth: '400px' }}>
              We believe that true luxury lies in absolute comfort and unrestricted movement. Our artistic resort wear is born from the desire to create garments that feel as light as a coastal breeze.
            </p>
            <p className="script-font" style={{ fontSize: '2.5rem', transform: 'rotate(-4deg)', display: 'inline-block', marginBottom: '2.5rem', color: 'var(--accent-gold)' }}>
              Stay effortless.
            </p>
            <br/>
            <Link to="/philosophy" className="editorial-link">
              Discover the Full Story →
            </Link>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .story-layout {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .story-image-wrapper {
            flex: 0 0 100% !important;
            width: 100% !important;
            margin-bottom: 0 !important;
          }
          .story-text-wrapper {
            flex: 0 0 100% !important;
            width: 90% !important;
            margin-left: 5% !important;
            margin-top: -4rem !important; /* Overlap upwards onto image */
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Story;
