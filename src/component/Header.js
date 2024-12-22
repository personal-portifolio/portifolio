import React, { useState } from 'react';
import { FaLinkedin, FaTelegramPlane, FaEnvelope, FaGithub } from 'react-icons/fa';

function Header() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const iconStyle = { color: 'rgba(138, 227, 216, 1.1)', transition: 'color 0.3s' };

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon); // Set the hovered icon
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null); // Reset the hovered icon
  };

  return (
    <header className='flex justify-end gap-4 p-5'>
      <a 
        href="https://www.linkedin.com/in/maraki-astatke-09174830a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxQQu6fB6SzKgW9SLMPQOKw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        onMouseEnter={() => handleMouseEnter('linkedin')}
        onMouseLeave={handleMouseLeave}
      >
        <FaLinkedin 
          style={{ ...iconStyle, color: hoveredIcon === 'linkedin' ? 'rgba(255, 255, 255, 1)' : iconStyle.color }} 
        />
      </a>
      <a 
        href="https://telegram.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Telegram"
        onMouseEnter={() => handleMouseEnter('telegram')}
        onMouseLeave={handleMouseLeave}
      >
        <FaTelegramPlane 
          style={{ ...iconStyle, color: hoveredIcon === 'telegram' ? 'rgba(255, 255, 255, 1)' : iconStyle.color }} 
        />
      </a>
      <a 
        href="mailto:example@example.com" 
        aria-label="Email"
        onMouseEnter={() => handleMouseEnter('email')}
        onMouseLeave={handleMouseLeave}
      >
        <FaEnvelope 
          style={{ ...iconStyle, color: hoveredIcon === 'email' ? 'rgba(255, 255, 255, 1)' : iconStyle.color }} 
        />
      </a>
      <a 
        href="https://github.com/maki-max/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
        onMouseEnter={() => handleMouseEnter('github')}
        onMouseLeave={handleMouseLeave}
      >
        <FaGithub 
          style={{ ...iconStyle, color: hoveredIcon === 'github' ? 'rgba(255, 255, 255, 1)' : iconStyle.color }} 
        />
      </a>
    </header>
  );
}

export default Header;