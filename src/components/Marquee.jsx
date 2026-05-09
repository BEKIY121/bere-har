import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "COASTAL ELEGANCE • WEIGHTLESS SILK • ARTISTIC RESORT WEAR • SUSTAINABLE CRAFT • ";
  
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      background: 'var(--text-dark)',
      color: 'var(--bg-cream)',
      padding: '1.5rem 0',
      display: 'flex',
      whiteSpace: 'nowrap',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex' }}
      >
        <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', paddingRight: '2rem' }}>
          {text}
        </span>
        <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', paddingRight: '2rem' }}>
          {text}
        </span>
        <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', paddingRight: '2rem' }}>
          {text}
        </span>
        <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', paddingRight: '2rem' }}>
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
