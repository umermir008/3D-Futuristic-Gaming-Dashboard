import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="cta-title glow">Ready to Power Up?</h2>
        <p className="cta-subtitle">Join millions of gamers in the ultimate futuristic gaming experience</p>
        
        <div className="cta-buttons">
          <motion.button 
            className="cta-button glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download App
          </motion.button>
          <motion.button 
            className="cta-button glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Premium Access
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;