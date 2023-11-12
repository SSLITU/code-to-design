import React, { useState } from 'react';
import styles from './Nav.module.scss';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{/* Place your logo here */}</div>
      <button
        className={styles.burger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* You can use an SVG or a character like ☰ for the burger icon */}☰
      </button>
      <ul
        className={`${styles.navList} ${
          isMenuOpen ? styles.navListActive : ''
        }`}
      >
        <li>
          <a href="#" className={styles.navItem}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItem}>
            Contact
          </a>
        </li>
        <li>
          <a href="#" className={styles.navItemSpecial}>
            Buy Now
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
