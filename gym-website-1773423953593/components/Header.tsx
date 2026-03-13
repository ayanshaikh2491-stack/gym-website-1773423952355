import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Gym Website</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Our Services</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;