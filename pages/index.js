import Head from 'next/head'
import Image from 'next/image'
import { Header,HomeSection,Skills } from '../components'
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
      </Head>
      <Header />
      <div className={styles.section}id="Home">
        <HomeSection/>
      </div>
      <div className={styles.section}id="Skill">
        <Skills/>
      </div>
      <div className={styles.section}id="Project">
        
      </div>
      <div className={styles.section}id="Contact">
        
      </div>
      {/* <div style={{backgroundColor:"#17526f", height:"100vh"}}id="Skill"></div>
      <div style={{backgroundColor:"#187524", height:"100vh"}}id="Project"></div>
      <div style={{backgroundColor:"#88cd7f", height:"100vh"}}id="Contact"></div> */}


    </div>
  )
}
