import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>Welcome to our gym, we are a professional and welcoming environment</p>
        <p>We have a team of experienced trainers and state-of-the-art equipment</p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </main>
    </div>
  );
};

export default About;