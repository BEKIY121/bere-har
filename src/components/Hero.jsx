import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import modelPng from '../assets/IMG_20260509_100314_592.webp';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const scaleParallax = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'var(--bg-cream)',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* High-End Grain Overlay */}
      <div style={{
        position: 'absolute', inset: 0, 
        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', 
        opacity: 0.04, pointerEvents: 'none', zIndex: 10 
      }} />

      {/* Amharic Watermark - Cultural Identity */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
          textAlign: 'center',
          width: '100%'
        }}
      >
        <h1 style={{
          fontSize: '22vw',
          fontWeight: '300',
          color: 'rgba(26,26,26,0.015)',
          margin: 0,
          lineHeight: 0.8,
          fontFamily: 'serif',
          letterSpacing: '0.1em'
        }}>
          ቤሬ ሀር
        </h1>
      </motion.div>

      {/* Main Model - Lowered from header for clear spacing */}
      <motion.div
        style={{
          position: 'relative',
          height: '85vh', /* Slightly shorter to lower it */
          marginTop: '80px', /* Pushed down from fixed header */
          width: 'auto',
          zIndex: 2,
          y: yParallax,
          scale: scaleParallax,
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          src={modelPng}
          alt="Bere Har Editorial"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.08))',
          }}
        />
        
        {/* Silk Badge Overlay */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          transform: 'rotate(15deg)',
          zIndex: 4,
          padding: '0.8rem 1.2rem',
          border: '1px solid var(--accent-gold)',
          backgroundColor: 'rgba(235, 230, 223, 0.8)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} className="silk-badge">
          <span style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Authentic</span>
          <span style={{ fontSize: '0.8rem', fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}>Pure Silk</span>
        </div>
      </motion.div>

      {/* Editorial Frame */}
      
      {/* Top Left: Geographic & Time */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }}
        style={{ position: 'absolute', left: '4rem', top: '22%', zIndex: 3 }}
        className="hero-ui-top-left"
      >
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{time} ASMARA</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontFamily: 'serif', marginTop: '0.5rem' }}>ቤሬ ሀር</p>
      </motion.div>

      {/* Center Left: Promotion Block */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1.5 }}
        style={{ position: 'absolute', left: '4rem', top: '55%', transform: 'translateY(-50%)', zIndex: 3, maxWidth: '200px' }}
        className="hero-ui-center-left"
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.9, fontFamily: 'Playfair Display, serif', fontWeight: '500', marginBottom: '1.5rem' }}>
          SILK<br/>WEEK
        </h2>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic' }}>
          Crafted with weightless Mulberry silk for the coastal spirit.
        </p>
        <p className="script-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginTop: '1.5rem' }}>The Collection.</p>
      </motion.div>

      {/* Bottom Right: Material Spec */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1.5 }}
        style={{ position: 'absolute', right: '4rem', bottom: '10%', zIndex: 3, textAlign: 'right' }}
        className="hero-ui-bottom-right"
      >
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>100% MULBERRY SILK</p>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-dark)', opacity: 0.6 }}>Hand-Woven in Asmara</p>
      </motion.div>

      {/* Scroll Guide */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      >
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--text-dark), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-ui-top-left, .silk-badge { display: none !important; }
          .hero-ui-center-left { top: 25% !important; left: 1.5rem !important; transform: none !important; max-width: 150px !important; }
          .hero-ui-center-left h2 { font-size: 2.2rem !important; }
          .hero-ui-center-left p { display: none !important; }
          .hero-ui-center-left .script-font { display: block !important; margin-top: 0.5rem !important; font-size: 2rem !important; }
          .hero-ui-bottom-right { right: 1.5rem !important; bottom: 8% !important; }
          motion-div { margin-top: 60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
