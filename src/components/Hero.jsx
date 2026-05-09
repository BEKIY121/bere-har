import React from 'react';
import { motion } from 'framer-motion';
import modelPng from '../assets/IMG_20260509_100314_592.webp';

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
      
      {/* Subtle Grain Overlay */}
      <div style={{
        position: 'absolute', inset: 0, 
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', 
        opacity: 0.05, pointerEvents: 'none', zIndex: 10 
      }} />

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

      {/* Editorial Block - Top Left: Issue Info */}
      <div className="hero-editorial-left" style={{ position: 'absolute', left: '8%', top: '22%', zIndex: 3 }}>
        <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.2rem' }}>Vol. 01 / Issue 10</p>
        <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--text-dark)', marginBottom: '2.5rem', opacity: 0.2 }} />
        <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 0.95, fontFamily: 'Playfair Display, serif', fontWeight: '500', color: 'var(--text-dark)' }}>
          BERE<br /><span style={{ marginLeft: '1rem' }}>HAR</span><br />WEEK
        </h3>
        <p className="script-font" style={{ fontSize: '1.8rem', marginTop: '1rem', color: 'var(--accent-gold)', transform: 'rotate(-5deg)' }}>The New Season</p>
      </div>

      {/* Editorial Block - Top Right: Vertical Text */}
      <div className="hero-editorial-right-top" style={{ position: 'absolute', right: '5%', top: '25%', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <p style={{ 
          writingMode: 'vertical-rl', 
          fontSize: '0.55rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.4em', 
          color: 'var(--text-muted)',
          borderRight: '1px solid rgba(26,26,26,0.1)',
          paddingRight: '1rem',
          height: '150px'
        }}>
          ESTABLISHED IN ASMARA — 2018
        </p>
      </div>

      {/* Editorial Block - Bottom Left: Stylist Notes */}
      <div className="hero-editorial-bottom-left" style={{ position: 'absolute', left: '8%', bottom: '15%', zIndex: 3, maxWidth: '280px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem' }}>+</div>
          <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Stylist's Selection</p>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.01em', fontWeight: '300' }}>
          "The interaction between heavy-woven raw silk and the weightless coastal breeze creates a silhouette that is both grounded and ethereal."
        </p>
        <p className="script-font" style={{ fontSize: '1.5rem', marginTop: '0.8rem', opacity: 0.6 }}>— Signature Piece 04</p>
      </div>

      {/* Editorial Block - Bottom Right: Collection ID */}
      <div className="hero-editorial-bottom-right" style={{ position: 'absolute', right: '8%', bottom: '12%', zIndex: 3, display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '0.5rem' }}>Autumn/Winter</p>
          <p style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display, serif', fontWeight: '500' }}>COLL. 2026</p>
        </div>
        <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--text-dark)', opacity: 0.1 }} />
      </div>

      {/* Artistic Signature Overlay */}
      <div style={{ position: 'absolute', bottom: '40%', left: '42%', zIndex: 1, opacity: 0.05, pointerEvents: 'none' }}>
        <p className="script-font" style={{ fontSize: '15vw', whiteSpace: 'nowrap', transform: 'rotate(-12deg)' }}>Artisan Made</p>
      </div>

      {/* Center Bottom: Discover UX */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hero-only-online" 
        style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, textAlign: 'center' }}
      >
        <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--text-dark)', margin: '0 auto 1.5rem', opacity: 0.3 }} />
        <p style={{ fontSize: '0.55rem', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5em', fontWeight: '500' }}>
          SCROLL TO DISCOVER
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;
