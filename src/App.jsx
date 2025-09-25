import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import GameStats from './components/GameStats';
import GameLibrary from './components/GameLibrary';
import VideoHighlight from './components/VideoHighlight';
import SocialPanel from './components/SocialPanel';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <GameStats />
              <GameLibrary />
              <VideoHighlight />
              <SocialPanel />
              <CallToAction />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;