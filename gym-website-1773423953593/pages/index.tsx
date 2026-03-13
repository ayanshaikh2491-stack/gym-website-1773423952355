import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Gym Website</h1>
        <p>Welcome to our professional gym website</p>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/services">
          <a>Our Services</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;