import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SocialPanel.css';

const SocialPanel = () => {
  const [hoveredFriend, setHoveredFriend] = useState(null);
  
  // Sample friend data
  const friends = [
    {
      id: 1,
      name: "AlexRider",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      level: 42,
      games: 24,
      achievements: 128
    },
    {
      id: 2,
      name: "CyberNinja",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      level: 38,
      games: 19,
      achievements: 96
    },
    {
      id: 3,
      name: "NeonGamer",
      status: "offline",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      level: 31,
      games: 15,
      achievements: 72
    },
    {
      id: 4,
      name: "QuantumPlay",
      status: "online",
      avatar: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      level: 45,
      games: 32,
      achievements: 156
    }
  ];

  return (
    <section className="social-panel">
      <motion.h2 
        className="section-title glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Friends Online
      </motion.h2>
      
      <div className="friends-container">
        {friends.map((friend, index) => (
          <motion.div
            key={friend.id}
            className="friend-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredFriend(friend)}
            onMouseLeave={() => setHoveredFriend(null)}
          >
            <div className="friend-avatar" style={{ 
              backgroundImage: `url(${friend.avatar})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className={`online-indicator ${friend.status}`}></div>
            </div>
            <div className="friend-name">{friend.name}</div>
            
            {hoveredFriend && hoveredFriend.id === friend.id && (
              <motion.div 
                className="friend-popup glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <h4>{friend.name}</h4>
                <div className="friend-stats">
                  <div className="stat">
                    <span className="label">Level:</span>
                    <span className="value">{friend.level}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Games:</span>
                    <span className="value">{friend.games}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Achievements:</span>
                    <span className="value">{friend.achievements}</span>
                  </div>
                </div>
                <button className="message-button glow-button">Message</button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialPanel;