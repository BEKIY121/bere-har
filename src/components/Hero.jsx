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

      {/* Background Watermark - Minimalist Large Text */}
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
          fontSize: '28vw',
          fontWeight: '300',
          color: 'rgba(26,26,26,0.02)',
          margin: 0,
          lineHeight: 0.8,
          fontFamily: 'Playfair Display, serif',
          letterSpacing: '-0.02em'
        }}>
          EST. 2018
        </h1>
      </motion.div>

      {/* Main Model - Dead Center, High Quality Polish */}
      <motion.div
        style={{
          position: 'relative',
          height: '95vh',
          width: 'auto',
          zIndex: 2,
          y: yParallax,
          scale: scaleParallax,
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={modelPng}
          alt="Bere Har Editorial"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 50px 120px rgba(0,0,0,0.1))',
          }}
        />
      </motion.div>

      {/* Editorial UI Frame - Minimalism & Precision */}
      
      {/* Top Left: Geographic & Time */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }}
        style={{ position: 'absolute', left: '4rem', top: '20%', zIndex: 3 }}
        className="hero-ui-top-left"
      >
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>ASMARA {time}</p>
        <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-gold)', opacity: 0.4 }} />
      </motion.div>

      {/* Center Left: Main Title Overlay (Subtle) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1.5 }}
        style={{ position: 'absolute', left: '4rem', top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}
        className="hero-ui-center-left"
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9, fontFamily: 'Playfair Display, serif', fontWeight: '500' }}>
          SILK<br/>WEEK
        </h2>
        <p className="script-font" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginTop: '1rem', marginLeft: '1rem' }}>Vol. 01</p>
      </motion.div>

      {/* Bottom Right: Material Spec */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1.5 }}
        style={{ position: 'absolute', right: '4rem', bottom: '10%', zIndex: 3, textAlign: 'right' }}
        className="hero-ui-bottom-right"
      >
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>MULBERRY SILK</p>
        <p style={{ fontSize: '0.7rem', fontStyle: 'italic', color: 'var(--text-dark)' }}>Serie No. 04 — Weightless Touch</p>
      </motion.div>

      {/* Bottom Left: Coordinates */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1.5 }}
        style={{ position: 'absolute', left: '4rem', bottom: '10%', zIndex: 3 }}
        className="hero-ui-bottom-left"
      >
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.4em', color: 'var(--text-muted)' }}>15.3333° N, 38.9333° E</p>
      </motion.div>

      {/* Scroll Guide */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      >
        <p style={{ fontSize: '0.45rem', letterSpacing: '0.6em', opacity: 0.4 }}>SCROLL</p>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--text-dark), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-ui-top-left, .hero-ui-bottom-left { display: none !important; }
          .hero-ui-center-left { top: 22% !important; left: 1.5rem !important; transform: none !important; }
          .hero-ui-center-left h2 { font-size: 2.8rem !important; }
          .hero-ui-bottom-right { right: 1.5rem !important; bottom: 8% !important; text-align: left !important; left: 1.5rem !important; }
          .hero-ui-bottom-right p:first-child { margin-bottom: 0.3rem !important; }
          motion-div img { height: 75vh !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
