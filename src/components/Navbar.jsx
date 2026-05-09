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
        width: '100%',
        zIndex: 100,
        padding: isScrolled ? '1.2rem 4rem' : '2.5rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(235, 230, 223, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }} className="nav-wrapper">
        
        {/* Left: Desktop Links */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '3rem' }}>
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{ 
                fontSize: '0.65rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-dark)',
                fontWeight: location.pathname === link.path ? '600' : '400'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center: Brand Logo */}
        <Link to="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: '600', 
            letterSpacing: '0.15em',
            margin: 0,
            textTransform: 'uppercase'
          }}>
            Bere Har
          </h1>
        </Link>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <button style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={15} strokeWidth={1.2} />
            <span className="nav-action-label" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>EN</span>
          </button>
          
          <button style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={15} strokeWidth={1.2} />
            <span className="nav-action-label" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>BAG (0)</span>
          </button>

          {/* Mobile Hamburger (Only visible on mobile via CSS) */}
          <button 
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(true)}
            style={{ background: 'none', border: 'none', padding: 0, display: 'none' }}
          >
            <Menu size={22} strokeWidth={1.2} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--bg-cream)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none' }}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', paddingLeft: '10%' }}>
              {navLinks.map((link, idx) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                  <Link to={link.path} style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif' }}>{link.name}</Link>
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
          .nav-action-label { display: none !important; }
          .nav-wrapper { padding: 1.5rem !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
