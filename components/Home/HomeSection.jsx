import styles from '../Home/HomeSection.module.scss'
import Link from 'next/link'
import css from 'classnames';
import { motion } from "framer-motion";

export const HomeSection = ({ darkMode }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.home}>
                <div className={css(darkMode ? styles.textsection : styles.lightTextsection)}>
                    <motion.div
                        className={styles.name}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                    >
                        Nattarat Serirat
                    </motion.div>
                    <motion.div
                        className={styles.role}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.75, type: "spring", bounce: 0.5 }}>
                        Software Developer
                    </motion.div>
                    <motion.div
                        className={styles.introduce}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 1, type: "spring", bounce: 0.5 }}>
                        Hi! My name is Fang. I&apos;m 4th-year student at King Mongkut&apos;s Institute of Technology Ladkrabang. I&apos;ve worked in the field of software development. Now I&apos;m looking for a job that will improve my software development skills
                    </motion.div>
                    <motion.div
                        className={styles.btnbox}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 1, type: "spring", bounce: 0.5 }}
                    >
                        <Link href="#Education">
                            <button className={styles.btn1}>Get Started</button>
                        </Link>
                        <a href="https://github.com/fangy43" target="_blank" rel="noreferrer">
                            <button className={styles.btn2}>Learn More</button>
                        </a>

                    </motion.div>
                </div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse", type: "spring", bounce: 0.5 }}
                   
                >
                    <motion.div
                        animate={{ opacity: [0, 1], scale: [0.75, 1.125, 1] }}
                        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
                    >
                        <div className={styles.box} >
                            <img
                                src="/Profile.png"
                                alt="Picture of Nattarat"
                                quality={100}
                                className={styles.img}
                            />
                        </div>
                    </motion.div>
                </motion.div>


            </div>
            <div className={styles.footer}>
                <a href="#Education" className={styles.arrow}>
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
                            style={{ filter: "contrast(100)" }}
                        />
                    }
                </a>
            </div>
        </div >
    )
}
