import styles from '../Projects/ProjectCard.module.scss'
import css from 'classnames'
import { motion } from 'framer-motion'

export const ProjectCard = ({ project, darkMode, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index - 0.5, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
        >
            <div
                className={css(darkMode ? styles.card : styles.lightCard)}>
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
            </div>
        </motion.div >
    )
}
