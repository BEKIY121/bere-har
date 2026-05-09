import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Atelier', path: '/atelier' },
  ];

  return (
    <>
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2.5rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 40,
        background: 'transparent'
      }}>
        {/* Left: Menu & Search */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1 }}>
          <button
            onClick={() => setIsMenuOpen(true)}
            style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.65rem', fontWeight: '500' }}
          >
            <Menu size={18} strokeWidth={1.5} />
            <span className="nav-menu-label">Menu</span>
          </button>
          <button style={{ color: 'var(--text-dark)' }} className="nav-search-icon">
            <Search size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center: Logo */}
        <Link to="/" style={{
          fontSize: '1rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          fontWeight: '600',
          color: 'var(--text-dark)',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}>
          Bere Har
        </Link>

        {/* Right: Lang & Cart */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <span className="nav-lang" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '500', color: 'var(--text-dark)' }}>
            EN / USD
          </span>
          <button style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.65rem', fontWeight: '500' }}>
            <ShoppingBag size={16} strokeWidth={1.5} />
            <span className="nav-cart-label">Bag (2)</span>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-cream)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem 4rem'
            }}
          >
            {/* Menu Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8vh' }}>
              <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1rem', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: '600' }}>
                Bere Har
              </Link>
              <button onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Close <X size={20} strokeWidth={1} />
              </button>
            </div>

            {/* Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1, justifyContent: 'center', paddingLeft: '2vw' }}>
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.08, duration: 0.7, ease: 'easeOut' }}
                    whileHover={{ x: 16 }}
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 6rem)',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '300',
                      color: 'var(--text-dark)',
                      lineHeight: 1.1,
                      borderBottom: '1px solid rgba(26,26,26,0.08)',
                      paddingBottom: '1rem'
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Menu Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(26,26,26,0.08)', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                © 2026 Bere Har. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                {['IG', 'IN', 'X'].map((s) => (
                  <a key={s} href="#" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-dark)' }}>{s}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Nav Styles */}
      <style>{`
        @media (max-width: 480px) {
          nav { padding: 1.8rem 1.5rem !important; }
          .nav-menu-label { display: none; }
          .nav-cart-label { display: none; }
        }
        @media (max-width: 768px) {
          nav { padding: 2rem 2rem !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
