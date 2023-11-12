import React, { useState } from 'react';
import styles from './Nav.module.css'; // Assuming you're using CSS Modules

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.logo}>Landing</div>
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        {/* Icon for burger menu */}
      </button>
      <ul
        id="menu"
        className={`${styles.menu} ${isOpen ? styles.show : ''}`}
        aria-hidden={!isOpen}
      >
        <li>
          <a href="/" className={styles.navItem} aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={styles.navItem}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" className={styles.navItem}>
            Contact
          </a>
        </li>
      </ul>
      <a href="/buy" className={styles.buyNow}>
        Buy Now
      </a>
    </nav>
  );
};

export default Nav;
