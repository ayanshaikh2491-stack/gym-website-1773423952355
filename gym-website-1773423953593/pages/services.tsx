import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Check out our services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Our Services</h1>
        <p>We offer a variety of services to help you achieve your fitness goals</p>
        <ul>
          <li>Personal Training</li>
          <li>Group Fitness Classes</li>
          <li>Weightlifting</li>
        </ul>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </main>
    </div>
  );
};

export default Services;