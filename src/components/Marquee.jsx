import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "100% PURE MULBERRY SILK • COASTAL ELEGANCE • WEIGHTLESS SILK • ARTISTIC RESORT WEAR • SUSTAINABLE CRAFT • HAND-WOVEN LUXURY • ";
  
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      background: 'var(--text-dark)',
      color: 'var(--bg-cream)',
      padding: '1.2rem 0',
      display: 'flex',
      whiteSpace: 'nowrap',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex' }}
      >
        <span style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.3em', paddingRight: '2rem', opacity: 0.9 }}>
          {text}
        </span>
        <span style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.3em', paddingRight: '2rem', opacity: 0.9 }}>
          {text}
        </span>
        <span style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.3em', paddingRight: '2rem', opacity: 0.9 }}>
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
