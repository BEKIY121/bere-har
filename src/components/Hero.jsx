import React from 'react';
import { motion } from 'framer-motion';
import modelPng from '../assets/IMG_20260509_100314_592.png';

const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'var(--bg-cream)',
      position: 'relative',
      overflow: 'hidden',
      padding: '0'
    }}>

      {/* Massive Background Typography */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <h1 className="hero-bg-text-0" style={{
          fontSize: '55vw',
          fontWeight: '200',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(26,26,26,0.06)',
          margin: 0,
          lineHeight: 1,
          fontFamily: 'Playfair Display, serif'
        }}>
          0
        </h1>
        <h2 className="hero-bg-text-uter" style={{
          fontSize: '20vw',
          color: 'rgba(26, 26, 26, 0.04)',
          margin: '0 0 0 -8vw',
          fontFamily: 'Playfair Display, serif',
          fontWeight: '300',
          letterSpacing: '0.05em'
        }}>
          UTER
        </h2>
      </motion.div>

      {/* Main Cutout Image Overlay (PNG) */}
      <motion.img
        className="hero-model-img"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        src={modelPng}
        alt="Editorial Model"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '92vh',
          objectFit: 'contain',
          zIndex: 2,
          filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.1))'
        }}
      />

      {/* Editorial Text Block - Top Left */}
      <div className="hero-editorial-left" style={{ position: 'absolute', left: '15%', top: '28%', zIndex: 3 }}>
        <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>10.08</p>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(26,26,26,0.3)', marginBottom: '1.5rem' }} />
        <h3 style={{ fontSize: '3rem', lineHeight: 1.05, fontFamily: 'Playfair Display, serif', fontWeight: '500', color: 'var(--text-dark)' }}>BERE<br />HAR<br />WEEK</h3>
      </div>

      {/* Editorial Text Block - Top Right */}
      <div className="hero-editorial-right-top" style={{ position: 'absolute', right: '15%', top: '22%', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>10.18</p>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(26,26,26,0.3)' }} />
      </div>

      {/* Editorial Text Block - Bottom Left */}
      <div className="hero-editorial-bottom-left" style={{ position: 'absolute', left: '15%', bottom: '22%', zIndex: 3, maxWidth: '240px' }}>
        <p className="script-font" style={{ fontSize: '3rem', color: 'var(--text-dark)', transform: 'rotate(-4deg)', marginBottom: '0.5rem', marginLeft: '-0.5rem', position: 'relative', zIndex: 2 }}>
          Styling Tip.
        </p>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.02em' }}>
          A classic daily piece. Modern, feminine, and casual moods. The steady seller of Bere Har's coastal line.
        </p>
      </div>

      {/* Editorial Text Block - Bottom Right */}
      <div className="hero-editorial-bottom-right" style={{ position: 'absolute', right: '5%', bottom: '15%', zIndex: 3, display: 'flex', alignItems: 'center', gap: '1.5rem', transform: 'rotate(-90deg)', transformOrigin: 'right bottom' }}>
        <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.25em', whiteSpace: 'nowrap' }}>26 F/W NEW COLLECTION</p>
        <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(26,26,26,0.3)' }} />
      </div>

      {/* Center Bottom Text */}
      <div className="hero-only-online" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: '500' }}>
          ONLY ONLINE
        </p>
      </div>

    </section>
  );
};

export default Hero;
