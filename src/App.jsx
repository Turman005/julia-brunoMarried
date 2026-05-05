import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import PhotoCarousel from './components/PhotoCarousel';
import EventInfo from './components/EventInfo';
import GiftList from './components/GiftList';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <PhotoCarousel />
        <EventInfo />
        <GiftList />
        <RSVPForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
