import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import modelPng from '../assets/IMG_20260509_100314_592.webp';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -120]);
  const textParallax = useTransform(scrollY, [0, 500], [0, 60]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })), 1000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Parallax Background Typography */}
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

      {/* Main Model with Parallax */}
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
          height: '105vh',
          objectFit: 'contain',
          zIndex: 2,
          filter: 'drop-shadow(0 40px 100px rgba(0,0,0,0.15))',
          y: yParallax
        }}
      />

      {/* Top Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hero-editorial-left" 
        style={{ position: 'absolute', left: '6%', top: '25%', zIndex: 3 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.2rem' }} className="hero-meta">
          <p style={{ fontSize: '0.5rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Asmara, ER (15.3° N)</p>
          <p style={{ fontSize: '0.5rem', color: 'var(--accent-gold)', fontWeight: '600' }}>{time}</p>
        </div>
        <h3 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.85, fontFamily: 'Playfair Display, serif', fontWeight: '500', color: 'var(--text-dark)' }}>
          BERE<br />HAR<br />WEEK
        </h3>
        <p className="hero-script" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginTop: '0.8rem', transform: 'rotate(-4deg)', opacity: 0.9 }}>The Silken Path.</p>
      </motion.div>

      {/* Floating Animated Badge - Hiddon on mobile or smaller */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '42%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid rgba(26,26,26,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          backgroundColor: 'rgba(235, 230, 223, 0.4)',
          backdropFilter: 'blur(5px)'
        }}
        className="hero-badge-floating"
      >
        <p style={{ fontSize: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.25em', textAlign: 'center', color: 'var(--text-dark)', opacity: 0.6 }}>
          26 F/W<br/>Atelier<br/>Limited
        </p>
      </motion.div>

      {/* Bottom Content */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="hero-editorial-bottom-right" 
        style={{ position: 'absolute', right: '6%', bottom: '12%', zIndex: 3, textAlign: 'right' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'flex-end', marginBottom: '0.8rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-dark)', opacity: 0.2 }} />
          <p style={{ fontSize: '0.5rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4em' }}>100% Raw Mulberry Silk</p>
        </div>
        <h4 style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', fontWeight: '400', fontStyle: 'italic' }}>Series No. 04</h4>
      </motion.div>

      <div className="hero-editorial-bottom-left" style={{ position: 'absolute', left: '6%', bottom: '12%', zIndex: 3, maxWidth: '280px' }}>
        <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', lineHeight: 1.8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Hand-Woven Traditions<br/>
          <span style={{ opacity: 0.5 }}>Asmara • Paris • Milan</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ height: [40, 70, 40], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '1px', backgroundColor: 'var(--text-dark)', zIndex: 3 }}
      />

    </section>
  );
};

export default Hero;
