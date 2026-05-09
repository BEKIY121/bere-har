import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import modelPng from '../assets/IMG_20260509_100314_592.webp';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const textParallax = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'var(--bg-cream)',
      position: 'relative',
      overflow: 'hidden',
      padding: '0'
    }}>
      
      {/* High-End Grain Overlay */}
      <div style={{
        position: 'absolute', inset: 0, 
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', 
        opacity: 0.05, pointerEvents: 'none', zIndex: 10 
      }} />

      {/* Background Large Text (Parallax) */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          y: textParallax
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
          fontSize: '18vw',
          color: 'rgba(26, 26, 26, 0.035)',
          margin: '0 0 0 -8vw',
          fontFamily: 'Playfair Display, serif',
          fontWeight: '300',
          letterSpacing: '0.05em'
        }}>
          UTER
        </h2>
      </motion.div>

      {/* Main Model (Parallax) */}
      <motion.img
        className="hero-model-img"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        src={modelPng}
        alt="Editorial Model"
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '102vh',
          objectFit: 'contain',
          zIndex: 2,
          filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.12))',
          y: yParallax
        }}
      />

      {/* Editorial Block - Top Left: Brand Identity */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hero-editorial-left" 
        style={{ position: 'absolute', left: '8%', top: '22%', zIndex: 3 }}
      >
        <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.45em', marginBottom: '1.2rem' }}>Vol. 01 / Issue 10</p>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-dark)', marginBottom: '2rem', opacity: 0.3 }} />
        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.9, fontFamily: 'Playfair Display, serif', fontWeight: '500', color: 'var(--text-dark)' }}>
          BERE<br />HAR<br />WEEK
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <p className="script-font" style={{ fontSize: '2.2rem', color: 'var(--accent-gold)' }}>The Collection.</p>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--accent-gold)', opacity: 0.4 }} />
        </div>
      </motion.div>

      {/* Floating Badge - Artistic Element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '42%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid rgba(26,26,26,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3
        }}
        className="hero-badge"
      >
        <p style={{ fontSize: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', color: 'var(--text-muted)' }}>
          Authentic<br/>Atelier<br/>2026
        </p>
      </motion.div>

      {/* Bottom Right: Collection Specs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hero-editorial-bottom-right" 
        style={{ position: 'absolute', right: '8%', bottom: '10%', zIndex: 3, textAlign: 'right' }}
      >
        <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '0.5rem' }}>Textured Silks</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'flex-end' }}>
          <h4 style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Serie No. 04</h4>
          <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--text-dark)', opacity: 0.2 }} />
        </div>
      </motion.div>

      {/* Left Bottom: Material Note */}
      <div className="hero-editorial-bottom-left" style={{ position: 'absolute', left: '8%', bottom: '10%', zIndex: 3, maxWidth: '240px' }}>
        <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.02em', fontStyle: 'italic' }}>
          "Each piece captures the rhythm of the waves, crafted with the patience of the tides."
        </p>
      </div>

      {/* Discover UX */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, textAlign: 'center' }}
      >
        <p style={{ fontSize: '0.5rem', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.6em', opacity: 0.5 }}>
          DISCOVER
        </p>
      </motion.div>

    </section>
  );
};

export default Hero;
