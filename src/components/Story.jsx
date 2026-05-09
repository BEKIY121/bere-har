import React from 'react';
import { motion } from 'framer-motion';
import storyImg from '../assets/IMG_20260509_100314_517.webp';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <section id="philosophy" style={{ background: 'var(--bg-cream)', padding: 'clamp(4rem, 10vw, 10rem) 0' }}>
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
            <div style={{ position: 'absolute', top: '-2rem', left: '-2rem', width: 'clamp(100px, 15vw, 180px)', height: 'clamp(100px, 15vw, 180px)', backgroundColor: 'rgba(213,200,186,0.4)', borderRadius: '50%', zIndex: 0 }} />
            <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
              <img 
                src={storyImg} 
                alt="Bere Har Campaign" 
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'cover' }} 
              />
            </div>

            {/* Spinning Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', bottom: '-2rem', right: '-2rem',
                width: 'clamp(80px, 10vw, 120px)', height: 'clamp(80px, 10vw, 120px)', borderRadius: '50%',
                border: '1px solid rgba(26,26,26,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
                backgroundColor: 'var(--bg-cream)'
              }}
            >
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4 }}>
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
            style={{ gridColumn: 'span 6' }}
          >
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our Philosophy
            </p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--text-dark)' }}>
              Where Sand<br/>Meets Silk
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              We believe that true luxury lies in absolute comfort and unrestricted movement. Our artistic resort wear is born from the desire to create garments that feel as light as a coastal breeze.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '3rem' }}>
              Every piece of Bere Har silk is meticulously woven to capture the essence of sun-drenched beaches and endless summers.
            </p>
            <p className="script-font" style={{ fontSize: '2rem', transform: 'rotate(-2deg)', display: 'inline-block', marginBottom: '2.5rem' }}>
              Stay effortless.
            </p>
            <br/>
            <Link to="/philosophy" style={{
              display: 'inline-block',
              fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em',
              borderBottom: '1px solid var(--text-dark)', paddingBottom: '0.3rem', color: 'var(--text-dark)',
              marginTop: '0.5rem'
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
