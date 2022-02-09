import styles from '../Projects/ProjectCard.module.scss'
import css from 'classnames'
import { motion } from 'framer-motion'

export const ProjectCard = ({ project, darkMode }) => {
    return (
        <motion.div
            className={css(darkMode ? styles.card : styles.lightCard)}
            animate={{ scale: [1.01, 0.99] }}
            transition={{ duration: Math.random() * 3 + 1.5, delay: Math.random() * 3 + 1.5, repeat: Infinity, repeatType: "reverse", }}
        >
            <div className={styles.imagebox}>
                <img className={styles.img} src={project.img} />
            </div>
            <div className={styles.textbox}>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.period}>{project.period}</div>
                <div className={styles.description}>{project.description}</div>
            </div>
            <div className={styles.link}>
                <a href={project.link} target="_blank" rel="noreferrer">
                    <button className={styles.btn}>See Github</button>
                </a>
            </div>
        </motion.div >
    )
}
