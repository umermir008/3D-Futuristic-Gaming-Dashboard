import React from 'react';
import { motion } from 'framer-motion';
import './VideoHighlight.css';

const VideoHighlight = () => {
  return (
    <section className="video-highlight">
      <motion.h2 
        className="section-title glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Game Highlights
      </motion.h2>
      
      <div className="video-container">
        <motion.div 
          className="video-overlay"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3>Immerse Yourself in Next-Gen Gaming</h3>
        </motion.div>
        
        {/* Placeholder for video - in a real app you would embed an actual video */}
        <div className="video-placeholder">
          <div className="play-button">
            <div className="triangle"></div>
          </div>
          <div className="video-text">Futuristic Gameplay Trailer</div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;