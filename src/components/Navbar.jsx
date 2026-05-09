import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Atelier', path: '/atelier' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 100,
        padding: isScrolled ? '0.8rem 4rem' : '1.8rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(235, 230, 223, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        height: isScrolled ? '65px' : '90px',
        overflow: 'hidden'
      }} className="nav-wrapper">
        
        {/* Left Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }} className="nav-left">
          <button style={{ background: 'none', border: 'none', padding: 0, color: 'var(--text-dark)', cursor: 'pointer' }}>
            <Globe size={14} strokeWidth={1.2} />
          </button>
          <button style={{ background: 'none', border: 'none', padding: 0, color: 'var(--text-dark)', cursor: 'pointer' }}>
            <ShoppingBag size={14} strokeWidth={1.2} />
          </button>
        </div>

        {/* Center Logo Assembly */}
        <Link to="/" style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <div className="nav-logo-container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="nav-logo" style={{ 
              fontSize: '1.1rem', 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: '500', 
              letterSpacing: '0.45em',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}>
              Bere Har
            </h1>
            <div className="nav-amharic-box" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              marginTop: '0.3rem',
              width: '100%',
              justifyContent: 'center'
            }}>
              <div style={{ flex: 1, height: '0.5px', backgroundColor: 'var(--accent-gold)', opacity: 0.2 }} />
              <span style={{ 
                fontSize: '0.55rem', 
                color: 'var(--text-muted)', 
                opacity: 0.7,
                letterSpacing: '0.05em'
              }}>
                ቤሬ ሀር
              </span>
              <div style={{ flex: 1, height: '0.5px', backgroundColor: 'var(--accent-gold)', opacity: 0.2 }} />
            </div>
          </div>
        </Link>

        {/* Right Nav / Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <div className="nav-desktop-links" style={{ display: 'flex', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{ 
                  fontSize: '0.58rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.25em',
                  color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-dark)',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button 
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(true)}
            style={{ background: 'none', border: 'none', padding: 0, display: 'none', color: 'var(--text-dark)' }}
          >
            <Menu size={22} strokeWidth={1.2} />
          </button>
        </div>
      </nav>

      {/* Full Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--bg-cream)', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', padding: '1rem' }}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', paddingLeft: '10%' }}>
              {navLinks.map((link, idx) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                  <Link to={link.path} style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif' }}>{link.name}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .nav-wrapper { padding: 0.6rem 1.2rem !important; height: 55px !important; width: 100% !important; }
          .nav-logo { font-size: 0.85rem !important; letter-spacing: 0.3em !important; }
          .nav-amharic-box { display: none !important; }
          .nav-left { gap: 1rem !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
