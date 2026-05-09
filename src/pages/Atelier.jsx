import React from 'react';
import { motion } from 'framer-motion';
import imgCraft1 from '../assets/IMG_20260509_100315_415.webp';
import imgCraft2 from '../assets/IMG_20260509_100308_708.webp';
import imgAtelier from '../assets/IMG_20260509_100308_479.webp';
import Footer from '../components/Footer';

const Atelier = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        padding: 0
      }}>
        <img 
          src={imgAtelier} 
          alt="Atelier Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} 
        />
        <div style={{ position: 'absolute', textAlign: 'center', color: '#fff', zIndex: 2 }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.5rem' }}
          >
            The Hands Behind the Silk
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}
          >
            The Atelier
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: 'clamp(4rem, 10rem, 10rem) 0' }}>
        <div className="container">
          <div className="editorial-grid atelier-intro" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7', order: 1 }}>
              <motion.img 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src={imgCraft1} 
                alt="Craftsmanship" 
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }} 
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ gridColumn: 'span 5', order: 2 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>Patience is our<br/>Main Ingredient.</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9 }}>
                Every Bere Har garment begins its journey as a single thread of raw, organic silk. In our Asmara atelier, we honor the slow traditions of hand-weaving that have been passed down through generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section style={{ padding: 'clamp(4rem, 10rem, 10rem) 0', backgroundColor: '#F0EBE5' }}>
        <div className="container">
          <div className="editorial-grid">
            {[
              { title: 'The Sun', body: 'Our colors are cured under the East African sun, ensuring a depth and vibrance that chemical processes can never replicate.' },
              { title: 'The Waves', body: 'Patterns are inspired by the rhythmic movement of the Red Sea, captured in fluid silk drapes.' },
              { title: 'The Wind', body: 'The weave is engineered for the ultimate breathability, allowing the coastal breeze to pass through the fabric.' }
            ].map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ gridColumn: 'span 4', textAlign: 'center', marginBottom: '2rem' }}
              >
                <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Pillar {idx + 1}</p>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>{pillar.title}</h3>
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--text-dark)', margin: '0 auto 2rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Quote Section */}
      <section style={{ padding: 'clamp(4rem, 10rem, 10rem) 0' }}>
        <div className="container">
          <div className="editorial-grid atelier-quote" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7', order: 1 }}>
              <motion.img 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={imgCraft2} 
                alt="Detail" 
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '800px', objectFit: 'cover' }} 
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ gridColumn: 'span 5', paddingLeft: 'clamp(0px, 4vw, 4rem)', order: 2 }}
            >
              <p className="script-font" style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '2rem' }}>Art in motion.</p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                "We believe that a garment should not only look like art, but it should be made with the same soul as a painting."
              </p>
              <p style={{ marginTop: '2rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>— Master Weaver, Bere Har</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ backgroundColor: 'var(--text-dark)', color: 'var(--bg-cream)', padding: '6rem 0' }}>
        <div className="container">
          <div className="editorial-grid">
            {[
              { val: '120+', label: 'Hours per Gown' },
              { val: '08', label: 'Artisan Families' },
              { val: '100%', label: 'Organic Silk' },
              { val: 'ZERO', label: 'Waste Policy' }
            ].map((stat) => (
              <div key={stat.label} style={{ gridColumn: 'span 3', textAlign: 'center', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Playfair Display, serif' }}>{stat.val}</h4>
                <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .atelier-intro, .atelier-quote { flex-direction: column !important; }
          .atelier-intro > div:first-child, .atelier-quote > div:first-child { order: 1 !important; margin-bottom: 2rem !important; }
          .atelier-intro > div:last-child, .atelier-quote > div:last-child { order: 2 !important; }
        }
      `}</style>
    </div>
  );
};

export default Atelier;
