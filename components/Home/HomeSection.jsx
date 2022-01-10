import styles from '../Home/HomeSection.module.scss'
import Link from 'next/link'
import css from 'classnames';

export const HomeSection = ({ darkMode }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.home}>
                <div className={css(darkMode ? styles.textsection : styles.lightTextsection)}>
                    <div className={styles.name}>
                        Nattarat Serirat
                    </div>
                    <div className={styles.role}>
                        Software Developer
                    </div>
                    <div className={styles.introduce}>
                        Hi! My name is Fang. I&apos;m 4th-year student at King Mongkut&apos;s Institute of Technology Ladkrabang. I&apos;ve worked in the field of software development. Now I&apos;m looking for a job that will improve my software development skills
                    </div>
                    <div className={styles.btnbox}>
                        <Link href="#Skills">
                            <button className={styles.btn1}>Get Started</button>
                        </Link>
                        <a href="https://github.com/fangy43" target="_blank" rel="noreferrer">
                            <button className={styles.btn2}>Learn More</button>
                        </a>

                    </div>
                </div>

                <div className={styles.box}>
                    <img
                        src="/Profile.png"
                        alt="Picture of Nattarat"
                        quality={100}
                        className={styles.img}
                    />
                </div>

            </div>
            <div className={styles.footer}>
                <a href="#Skills" className={styles.arrow}>
                    {darkMode ?
                        <img
                            src="/down-arrow.png"
                            width={30}
                            height={30}
                            className={styles.arrowimg}
                        /> 
                        :
                        <img
                            src="/down-arrow.png"
                            width={30}
                            height={30}
                            className={styles.arrowimg}
                            style={{filter:"contrast(100)"}}
                        />
                    }
                </a>
            </div>
        </div >
    )
}
