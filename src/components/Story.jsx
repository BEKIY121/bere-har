import React from 'react';
import { motion } from 'framer-motion';
import storyImg from '../assets/IMG_20260509_100314_517.webp';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <section id="philosophy" style={{ background: 'var(--bg-cream)', padding: 'clamp(3rem, 6vw, 6rem) 0' }}>
      <div className="container">
        <div className="editorial-grid" style={{ alignItems: 'center' }}>

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ position: 'relative', gridColumn: 'span 6' }}
          >
            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: 'clamp(80px, 12vw, 150px)', height: 'clamp(80px, 12vw, 150px)', backgroundColor: 'rgba(213,200,186,0.4)', borderRadius: '50%', zIndex: 0 }} />
            <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
              <img 
                src={storyImg} 
                alt="Bere Har Campaign" 
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '580px', objectFit: 'cover' }} 
              />
            </div>

            {/* Spinning Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                width: 'clamp(70px, 8vw, 100px)', height: 'clamp(70px, 8vw, 100px)', borderRadius: '50%',
                border: '1px solid rgba(26,26,26,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
                backgroundColor: 'var(--bg-cream)'
              }}
            >
              <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4 }}>
                Bere<br/>Har
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 4vw, 4rem)' }}
          >
            <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our Philosophy
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
              Where Sand<br/>Meets Silk
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              We believe that true luxury lies in absolute comfort and unrestricted movement. Our artistic resort wear is born from the desire to create garments that feel as light as a coastal breeze.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Every piece of Bere Har silk is meticulously woven to capture the essence of sun-drenched beaches and endless summers.
            </p>
            <p className="script-font" style={{ fontSize: '1.8rem', transform: 'rotate(-2deg)', display: 'inline-block', marginBottom: '2rem' }}>
              Stay effortless.
            </p>
            <br/>
            <Link to="/philosophy" style={{
              display: 'inline-block',
              fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em',
              borderBottom: '1px solid var(--text-dark)', paddingBottom: '0.3rem', color: 'var(--text-dark)'
            }}>
              Discover the Full Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
