import Head from 'next/head'
import { Header, HomeSection, Skills, Projects, Footer, Education } from '../components'
import styles from '../styles/Home.module.scss'
import { useState ,useEffect} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode===true?styles.darkContainer:styles.container}>
      <Head>
        <title>Fangy</title>
        <meta name="description" content="Nattarat Serirat's Portfolio" />
        <meta property="og:image" content="../public/preview-img.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={styles.section} id="Home">
        <HomeSection darkMode={darkMode}/>
      </div>
      <div className={styles.section} id="Education">
        <Education darkMode={darkMode}/>
      </div>
      <div className={styles.section} id="Skills">
        <Skills darkMode={darkMode}/>
      </div>
      <div className={styles.longsection} id="Projects">
        <Projects darkMode={darkMode}/>
      </div>
      <div className={styles.footer} id="Contact">
        <Footer darkMode={darkMode}/>
      </div>
      {darkMode &&
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
      }
    </div>
  )
}
