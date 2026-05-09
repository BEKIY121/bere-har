import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: 'var(--bg-cream)' }}>
      
      {/* Top Band */}
      <div className="footer-top" style={{ borderBottom: '1px solid rgba(235,230,223,0.1)', padding: '4rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(235,230,223,0.5)', marginBottom: '0.5rem' }}>Complimentary worldwide shipping</p>
            <p style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>On all orders above $500</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/" style={{ fontSize: '2rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '600', color: 'var(--bg-cream)', display: 'block', marginBottom: '0.3rem' }}>
              Bere Har
            </Link>
            <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(235,230,223,0.4)' }}>Artistic Resort Wear · Est. 2018</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'rgba(235,230,223,0.5)', marginBottom: '0.5rem' }}>Client Services</p>
            <p style={{ fontSize: '0.9rem', letterSpacing: '0.05em' }}>atelier@berehar.com</p>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-grid container" style={{ padding: '5rem 0 4rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem' }}>
        
        {/* Brand Column */}
        <div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(235,230,223,0.6)', lineHeight: 1.8, maxWidth: '300px', marginBottom: '2.5rem' }}>
            Bere Har is a coastal luxury silk brand dedicated to the art of effortless, handcrafted resort wear. Born on the shores of Eritrea, worn across the world.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['IG', 'IN', 'X'].map((s) => (
              <a key={s} href="#" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(235,230,223,0.5)', borderBottom: '1px solid rgba(235,230,223,0.2)', paddingBottom: '0.2rem', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--bg-cream)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(235,230,223,0.5)'}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4 style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1.5rem', color: 'rgba(235,230,223,0.4)', fontWeight: '500' }}>Collections</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {['Resort Wear', 'Couture', 'Signature Line', 'Accessories', 'New Arrivals'].map((item) => (
              <Link key={item} to="/shop" style={{ fontSize: '0.85rem', color: 'rgba(235,230,223,0.7)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--bg-cream)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(235,230,223,0.7)'}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1.5rem', color: 'rgba(235,230,223,0.4)', fontWeight: '500' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              { label: 'Philosophy', path: '/philosophy' },
              { label: 'Atelier', path: '/atelier' },
              { label: 'Journal', path: '/' },
              { label: 'Careers', path: '/' },
              { label: 'Contact', path: '/' },
            ].map((item) => (
              <Link key={item.label} to={item.path} style={{ fontSize: '0.85rem', color: 'rgba(235,230,223,0.7)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--bg-cream)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(235,230,223,0.7)'}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Client Care */}
        <div>
          <h4 style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '1.5rem', color: 'rgba(235,230,223,0.4)', fontWeight: '500' }}>Client Care</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {['Sizing Guide', 'Care Instructions', 'Shipping & Returns', 'Order Status', 'Private Appointments'].map((item) => (
              <a key={item} href="#" style={{ fontSize: '0.85rem', color: 'rgba(235,230,223,0.7)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--bg-cream)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(235,230,223,0.7)'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(235,230,223,0.08)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.65rem', color: 'rgba(235,230,223,0.3)', letterSpacing: '0.1em' }}>
            © 2026 Bere Har. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" style={{ fontSize: '0.65rem', color: 'rgba(235,230,223,0.3)', letterSpacing: '0.05em' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
