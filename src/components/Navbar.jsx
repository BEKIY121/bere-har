import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/', id: '01' },
    { name: 'Shop', path: '/shop', id: '02' },
    { name: 'Philosophy', path: '/philosophy', id: '03' },
    { name: 'Atelier', path: '/atelier', id: '04' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: isScrolled ? '1rem 4rem' : '2.5rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(235, 230, 223, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(26,26,26,0.05)' : 'none'
      }} className="nav-container">
        
        {/* Left: Language & Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            <Globe size={14} /> <span className="nav-lang">EN</span>
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            <ShoppingBag size={14} /> <span className="nav-cart-label">Bag (0)</span>
          </button>
        </div>

        {/* Center: Brand Logo */}
        <Link to="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <h1 style={{ 
            fontSize: '1.8rem', 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: '600', 
            letterSpacing: '0.1em',
            margin: 0,
            textTransform: 'uppercase'
          }}>
            Bere Har
          </h1>
        </Link>

        {/* Right: Menu Toggle */}
        <button 
          onClick={() => setIsOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}
        >
          <span className="nav-menu-label">Menu</span>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Full Screen Editorial Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-cream)',
              zIndex: 1000,
              display: 'flex',
              padding: '4rem'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '2.5rem', right: '4rem', zIndex: 1001 }}
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Menu Content */}
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', width: '100%' }}>
              
              {/* Left: Navigation Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      style={{ 
                        fontSize: 'clamp(3rem, 8vw, 6rem)', 
                        fontFamily: 'Playfair Display, serif',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '2rem',
                        transition: 'all 0.4s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '2rem'}
                      onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}
                    >
                      <span style={{ fontSize: '0.8rem', fontFamily: 'Inter', opacity: 0.3 }}>{link.id}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right: Editorial Image / Info */}
              <div style={{ paddingLeft: '8rem', borderLeft: '1px solid rgba(26,26,26,0.05)', display: 'flex', flexDirection: 'column', gap: '3rem' }} className="menu-editorial">
                <div>
                  <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Current Mood</p>
                  <p className="script-font" style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>Coastal Serenity.</p>
                </div>
                <div style={{ maxWidth: '300px' }}>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                    Inspired by the timeless dialogue between the ocean waves and the sun-drenched sands of the Red Sea coast.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.8rem' }}>Contact</p>
                  <p style={{ fontSize: '0.7rem' }}>studio@berehar.com</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-container { padding: 1.5rem !important; }
          .nav-lang, .nav-cart-label, .nav-menu-label { display: none; }
          .menu-editorial { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
