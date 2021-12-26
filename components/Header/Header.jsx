import styles from '../Header/Header.module.scss'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    Fangy
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <Link href="#Home">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#Skills">
                                <a>Skills</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#Projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#Contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
