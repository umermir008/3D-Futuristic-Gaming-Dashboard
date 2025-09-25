import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GameLibrary.css';

const GameLibrary = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  
  // Sample game data
  const games = [
    {
      id: 1,
      title: "Neon Racer",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Race through neon-lit cityscapes in this high-speed futuristic racing game. Customize your vehicle and compete in tournaments.",
      screenshots: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 2,
      title: "Cyber Quest",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Embark on an epic journey through a cyberpunk world filled with mystery and danger. Upgrade your gear and unlock new abilities.",
      screenshots: [
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 3,
      title: "Holo Wars",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Command your holographic army in intense tactical battles. Deploy units strategically and dominate the battlefield.",
      screenshots: [
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];

  const openModal = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <section className="game-library">
      <motion.h2 
        className="section-title glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Game Library
      </motion.h2>
      
      <div className="carousel-container">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            className="game-cover"
            style={{ 
              backgroundImage: `url(${game.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 30px rgba(0, 243, 255, 0.8)",
              zIndex: 10
            }}
            onClick={() => openModal(game)}
          />
        ))}
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <motion.div 
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="modal-content glass">
            <button className="close-button" onClick={closeModal}>×</button>
            <h3>{selectedGame.title}</h3>
            <div className="game-screenshots">
              {selectedGame.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
              ))}
            </div>
            <p>{selectedGame.description}</p>
            <button className="cta-button glow-button">Play Now</button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GameLibrary;