import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Story from '../components/Story';
import FeaturedLook from '../components/FeaturedLook';
import Collection from '../components/Collection';
import BrandStats from '../components/BrandStats';
import Craft from '../components/Craft';
import JournalPreview from '../components/JournalPreview';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      <Story />
      <FeaturedLook />
      <Collection />
      <BrandStats />
      <Craft />
      <JournalPreview />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
