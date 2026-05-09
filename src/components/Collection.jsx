import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/IMG_20260509_100308_041.webp';
import img2 from '../assets/IMG_20260509_100308_148.webp';
import img3 from '../assets/IMG_20260509_100308_397.webp';
import img4 from '../assets/IMG_20260509_100308_424.webp';

const products = [
  { id: 1, name: 'Ocean Breeze Wrap', category: 'Mulberry Silk', price: '$850', image: img1, tag: 'Pure Silk' },
  { id: 2, name: 'Coastal Sand Dress', category: 'Hand-Woven Silk', price: '$1,200', image: img2, tag: 'Signature' },
  { id: 3, name: 'Seafoam Scarf', category: 'Lightweight Silk', price: '$350', image: img3, tag: 'Artisan' },
  { id: 4, name: 'Coral Sunset Gown', category: 'Raw Silk', price: '$2,400', image: img4, tag: 'Mulberry' },
];

const Collection = () => {
  return (
    <section id="collection" style={{ background: 'var(--bg-cream)', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>The Collection</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400', color: 'var(--text-dark)' }}>
              Silken Masterpieces
            </h2>
          </div>
          <Link to="/shop" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', borderBottom: '1px solid var(--text-dark)', paddingBottom: '0.3rem', color: 'var(--text-dark)' }}>
            View Full Collection →
          </Link>
        </div>

        {/* Product Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ cursor: 'pointer' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#DDD6CE', marginBottom: '1.2rem', aspectRatio: '3/4' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="img-zoom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Silk Tag */}
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  backgroundColor: 'rgba(235, 230, 223, 0.9)', 
                  padding: '0.4rem 0.8rem', 
                  fontSize: '0.55rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em',
                  backdropFilter: 'blur(5px)',
                  zIndex: 2
                }}>
                  {product.tag}
                </div>

                {/* Hover CTA */}
                <div className="hover-cta" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.2rem', background: 'linear-gradient(to top, rgba(26,26,26,0.4), transparent)', opacity: 0, transition: 'opacity 0.4s ease' }}>
                  <span style={{ color: '#fff', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>View Silken Detail</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>{product.category}</p>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>{product.name}</h3>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (hover: hover) {
          div:hover > .hover-cta { opacity: 1 !important; }
        }
        @media (max-width: 600px) {
          .hover-cta { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Collection;
