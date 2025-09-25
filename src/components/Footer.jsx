import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const links = [
    { id: 1, name: "Dashboard", href: "#" },
    { id: 2, name: "Library", href: "#" },
    { id: 3, name: "Friends", href: "#" },
    { id: 4, name: "Highlights", href: "#" },
    { id: 5, name: "Contact", href: "#" }
  ];

  const socialIcons = [
    { id: 1, icon: <FaFacebook />, href: "#" },
    { id: 2, icon: <FaTwitter />, href: "#" },
    { id: 3, icon: <FaInstagram />, href: "#" },
    { id: 4, icon: <FaDiscord />, href: "#" },
    { id: 5, icon: <FaYoutube />, href: "#" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {links.map(link => (
            <a key={link.id} href={link.href} className="footer-link glow">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="social-icons">
          {socialIcons.map(social => (
            <a 
              key={social.id} 
              href={social.href} 
              className="social-icon glow"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div className="copyright">
        © 2025 GameVerse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;