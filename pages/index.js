import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { fetchRandomCat } from '../services/cat';

const Home = ({ cat }) => {

  useEffect(() => {
    window.onbeforeunload = () => {
      return "Deseja fechar o site?";
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Browser Prevent Close</title>
        <meta name="description" content="Application to prevent chrome from closing by brute force" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={cat.file} width={800} height={600} />
        <h2>
          Click on the image to prevent the browser from forcibly closing the browser
        </h2>
      </main>
    </div>
  )
};

export async function getStaticProps(context) {
  const res = await fetchRandomCat();

  return {
    props: {
      cat: res
    },
    revalidate: 950400
  }
}

export default Home;
