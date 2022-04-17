import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Jira</title>
        <meta name="description" content="A Project for the ISS Course 202" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FIRA!
        </h1>

        <p className={styles.description}>
          A Project for the ISS Course 2022
        </p>
      </main>
    </div>
  )
}

export default Home
