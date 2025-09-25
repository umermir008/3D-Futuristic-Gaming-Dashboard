import React from 'react';
import { motion } from 'framer-motion';
import './GameStats.css';

const GameStats = () => {
  const stats = [
    { id: 1, title: "Hours Played", value: "1,248", icon: "⏱️" },
    { id: 2, title: "Achievements", value: "86%", icon: "🏆" },
    { id: 3, title: "Friends Online", value: "24", icon: "👥" },
    { id: 4, title: "XP Level", value: "42", icon: "⚡" }
  ];

  return (
    <section className="game-stats-section">
      <motion.h2 
        className="section-title glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Your Gaming Stats
      </motion.h2>
      
      <div className="game-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="stat-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 20px rgba(0, 243, 255, 0.7)",
              borderColor: "rgba(0, 243, 255, 0.5)"
            }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            
            {stat.title === "XP Level" && (
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GameStats;