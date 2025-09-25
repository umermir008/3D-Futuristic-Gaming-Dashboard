import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* 3D Holographic Controller */}
      <div className="controller-container">
        <motion.div 
          className="holographic-controller"
          animate={{ 
            rotateY: 360,
            y: [0, -15, 0]
          }}
          transition={{ 
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="controller-face">
            <div className="button a-button"></div>
            <div className="button b-button"></div>
            <div className="joystick left-joystick"></div>
            <div className="joystick right-joystick"></div>
            <div className="dpad">
              <div className="dpad-up"></div>
              <div className="dpad-down"></div>
              <div className="dpad-left"></div>
              <div className="dpad-right"></div>
            </div>
          </div>
          <div className="controller-body"></div>
        </motion.div>
      </div>

      <motion.h1 
        className="hero-title glow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Step Into the Future of Gaming
      </motion.h1>

      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Track, Play & Experience Like Never Before
      </motion.p>

      <motion.div 
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <button className="cta-button glow-button">Start Dashboard</button>
        <button className="cta-button glow-button">Join Community</button>
      </motion.div>
    </section>
  );
};

export default HeroSection;