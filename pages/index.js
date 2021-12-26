import Head from 'next/head'
import Image from 'next/image'
import { Header, HomeSection, Skills, Projects } from '../components'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fangy</title>
        <meta name="description" content="Nattarat Serirat's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <div className={styles.section} id="Home">
        <HomeSection />
      </div>
      <div className={styles.section} id="Skills">
        <Skills />
      </div>
      <div className={styles.longsection} id="Projects">
        <Projects />
      </div>
      <div className={styles.section} id="Contact">

      </div>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>
  )
}
