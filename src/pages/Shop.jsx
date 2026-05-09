import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG_20260509_100308_041.webp';
import img2 from '../assets/IMG_20260509_100308_148.webp';
import img3 from '../assets/IMG_20260509_100308_397.webp';
import img4 from '../assets/IMG_20260509_100308_424.webp';
import img5 from '../assets/IMG_20260509_100308_657.webp';
import img6 from '../assets/IMG_20260509_100308_670.webp';
import img7 from '../assets/IMG_20260509_100308_749.webp';
import img8 from '../assets/IMG_20260509_100314_726.webp';

const products = [
  { id: 1, name: 'Coastal Silk Wrap', category: 'Resort Wear', price: '$850', image: img1, tag: 'Bestseller' },
  { id: 2, name: 'Dune Linen Dress', category: 'Signature', price: '$1,200', image: img2, tag: 'New' },
  { id: 3, name: 'Seafoam Drape Scarf', category: 'Accessories', price: '$350', image: img3, tag: null },
  { id: 4, name: 'Coral Sunset Gown', category: 'Couture', price: '$2,400', image: img4, tag: 'Limited' },
  { id: 5, name: 'Ivory Tide Kaftan', category: 'Resort Wear', price: '$980', image: img5, tag: 'New' },
  { id: 6, name: 'Amber Shore Set', category: 'Signature', price: '$1,450', image: img6, tag: null },
  { id: 7, name: 'Sand Whisper Blouse', category: 'Everyday', price: '$620', image: img7, tag: null },
  { id: 8, name: 'Horizon Float Dress', category: 'Couture', price: '$1,900', image: img8, tag: 'Limited' },
];

const Shop = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div style={{ paddingTop: 'clamp(100px, 15vh, 15vh)', paddingBottom: 'clamp(2rem, 6rem, 6rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <h1 style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontSize: '25vw', color: 'rgba(26,26,26,0.03)', fontFamily: 'Playfair Display, serif',
          fontWeight: '300', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0
        }}>
          Shop
        </h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>
            26 F/W New Collection
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>The Collection</h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(26,26,26,0.3)', margin: '2rem auto 0' }} />
        </motion.div>
      </div>

      {/* Filter Row */}
      <div className="container" style={{ 
        display: 'flex', 
        gap: '2.5rem', 
        marginBottom: '4rem', 
        borderBottom: '1px solid rgba(26,26,26,0.1)', 
        paddingBottom: '1.5rem',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        WebkitOverflowScrolling: 'touch'
      }}>
        {['All', 'Resort Wear', 'Couture', 'Signature', 'Accessories'].map((cat) => (
          <button key={cat} style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: cat === 'All' ? 'var(--text-dark)' : 'var(--text-muted)', fontWeight: cat === 'All' ? '600' : '400', flexShrink: 0 }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="container" style={{ paddingBottom: '10rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem 2rem' 
        }}>
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.8, ease: 'easeOut' }}
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
                {product.tag && (
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', backgroundColor: 'var(--bg-cream)', padding: '0.3rem 0.6rem' }}>
                    {product.tag}
                  </span>
                )}
              </div>
              {/* Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>{product.category}</p>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: '400', letterSpacing: '-0.01em' }}>{product.name}</h3>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
