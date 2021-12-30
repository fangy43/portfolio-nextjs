import styles from '../Header/Header.module.scss'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export const Header = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        Fangy
                    </div>
                    {!isMobile ?
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
                        :
                        null
                    }
                </div>

            </div>
          
        </>
    )
}
