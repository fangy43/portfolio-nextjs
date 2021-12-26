import styles from '../Home/HomeSection.module.scss'
import Link from 'next/link'


export const HomeSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.home}>
                <div className={styles.textsection}>
                    <div className={styles.name}>
                        Nattarat Serirat
                    </div>
                    <div className={styles.role}>
                        Software Developer
                    </div>
                    <div className={styles.introduce}>
                        Hi! My name is Fang. I’m 4th-year student at King Mongkut's Institute of Technology Ladkrabang. I've worked in the field of software development. Now I'm looking for a job that will improve my software development skills
                    </div>
                    <div className={styles.btnbox}>
                        <Link href="#Skills">
                            <button className={styles.btn1}>Get Started</button>
                        </Link>
                        <a href="https://github.com/fangy43" target="_blank">
                            <button className={styles.btn2}>Learn More</button>
                        </a>

                    </div>
                </div>
                <div className={styles.box}>
                    <img
                        src="/Profile.png"
                        alt="Picture of Nattarat"
                        width={400}
                        height={400}
                        quality={100}
                        className={styles.img}
                    />
                </div>
            </div>
            <div className={styles.footer}>
                <a href="#Skills" className={styles.arrow}>
                    <img
                        src="/down-arrow.png"
                        width={30}
                        height={30}
                        className={styles.arrowimg}
                    />
                </a>
            </div>
        </div >
    )
}
