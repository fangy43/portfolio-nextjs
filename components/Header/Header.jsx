import styles from '../Header/Header.module.scss'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import Switch from "react-switch";
export const Header = ({ darkMode, setDarkMode }) => {
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
                    <Switch
                        onChange={() => setDarkMode(!darkMode)}
                        checked={darkMode}
                        offColor='#fda517'
                        onColor='#344CB7'
                        checkedIcon={ <div style={{padding:"0.25rem 0.5rem" , color:"white"}}><i className="fa fa-moon-o"></i></div>}
                        uncheckedIcon={ <div style={{padding:"0.25rem 0.35rem" , color:"white"}}><i className="fa fa-sun-o"></i></div>}
                    />
                </div>

            </div>

        </>
    )
}
