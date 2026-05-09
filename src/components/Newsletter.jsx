import React from 'react';

const Newsletter = () => {
  return (
    <section style={{ backgroundColor: '#1A1A1A', color: 'var(--bg-cream)', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem', fontWeight: '400' }}>
          Join the Atelier
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'rgba(235, 230, 223, 0.6)', letterSpacing: '0.1em', marginBottom: '3rem', lineHeight: 1.6 }}>
          Subscribe to receive exclusive access to our newest resort collections, editorial journals, and private events.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(235, 230, 223, 0.3)',
              color: 'var(--bg-cream)',
              padding: '1rem 0',
              fontSize: '1rem',
              textAlign: 'center',
              outline: 'none',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <button 
            type="submit"
            style={{
              backgroundColor: 'var(--bg-cream)',
              color: '#1A1A1A',
              padding: '1rem 3rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#D5C8BA'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--bg-cream)'}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
