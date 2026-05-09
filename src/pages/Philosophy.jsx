import React from 'react';
import { motion } from 'framer-motion';
import storyImg from '../assets/IMG_20260509_100314_517.jpg';
import img726 from '../assets/IMG_20260509_100314_726.jpg';
import imgAtelier from '../assets/IMG_20260509_100308_479.jpg';

const Philosophy = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>

      {/* Chapter 1: Hero Statement */}
      <section style={{ paddingTop: '15vh', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', fontSize: '20vw', color: 'rgba(26,26,26,0.025)', fontFamily: 'Playfair Display, serif', fontWeight: '300', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>ORIGINS</span>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '2rem' }}>Our Philosophy — 01</p>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.05, marginBottom: '2.5rem', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>Where Sand<br/>Meets Silk</h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '420px', marginBottom: '2.5rem' }}>
              Bere Har was born from a simple desire: to capture the effortless elegance of coastal living and translate it into wearable art. Our garments are an extension of the serene, artistic spirit of the ocean.
            </p>
            <p className="script-font" style={{ fontSize: '2.5rem', transform: 'rotate(-2deg)', display: 'inline-block' }}>Stay effortless.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '220px', height: '220px', backgroundColor: 'rgba(213,200,186,0.5)', borderRadius: '50%', zIndex: 0 }} />
            <img src={storyImg} alt="Bere Har Philosophy" style={{ width: '100%', height: '700px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: History Timeline */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Our Philosophy — 02</p>
              <h2 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', fontWeight: '400', lineHeight: 1.1 }}>The<br/>History</h2>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { year: '2018', title: 'The First Thread', body: 'Founded on the sun-soaked shores of Eritrea, Bere Har began as a small atelier with a single silk loom and a vision of coastal elegance. The first collection, "Tides," was ten handwoven pieces presented to a private audience.' },
                { year: '2020', title: 'A Global Vision', body: 'After winning the East African Fashion Award, Bere Har expanded. The brand began exporting to boutiques across Europe, earning recognition in Paris and Milan for its distinctive sand-meets-silk philosophy.' },
                { year: '2023', title: 'The Atelier Opens', body: 'The formal Bere Har Atelier opened its doors in Asmara — a dedicated space where artisans, designers, and clients converge. Every piece is produced to order, ensuring zero waste and absolute quality.' },
                { year: '2026', title: 'The Digital Collection', body: 'Embracing the digital age without compromising craftsmanship, Bere Har launches its first fully digital collection, bringing coastal resort-wear to clients worldwide.' },
              ].map((item, idx) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '3rem', alignItems: 'flex-start', paddingBottom: '3rem', paddingTop: '3rem', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', paddingTop: '0.4rem' }}>{item.year}</span>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.8rem', fontWeight: '400' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Full Width Campaign */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <img src={img726} alt="Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(235,230,223,0.5) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <p className="script-font" style={{ fontSize: '5rem', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>The Bere Har Way.</p>
        </div>
      </section>

      {/* Chapter 4: Values */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Our Philosophy — 03</p>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>What We Stand For</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { num: '01', title: 'Radical Honesty', body: 'Every stitch, thread, and dye is documented, traceable, and ethically sourced from coastal communities.' },
              { num: '02', title: 'Artisanal Mastery', body: 'Each piece is crafted by hand by over 40 skilled artisans, preserving ancient silk weaving traditions.' },
              { num: '03', title: 'Coastal Spirit', body: 'The ocean is our muse. Its rhythms, unpredictability, and serenity guide every design decision we make.' },
            ].map((val, idx) => (
              <motion.div key={val.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.8 }} style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '8rem', color: 'rgba(26,26,26,0.04)', fontFamily: 'Inter, sans-serif', fontWeight: '800', lineHeight: 1, marginBottom: '-2rem' }}>{val.num}</h3>
                <h4 style={{ fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', fontWeight: '400' }}>{val.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 5: Founders Quote */}
      <section style={{ padding: '0 0 10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <img src={imgAtelier} alt="Atelier" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '2rem' }}>Our Promise</p>
              <p style={{ fontSize: '1.6rem', fontFamily: 'Playfair Display, serif', fontWeight: '300', lineHeight: 1.6, marginBottom: '3rem' }}>
                "We do not make fashion. We make pieces that belong to the places you have been and the person you are becoming."
              </p>
              <p className="script-font" style={{ fontSize: '2rem', transform: 'rotate(-2deg)', display: 'inline-block' }}>— The Founders</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
