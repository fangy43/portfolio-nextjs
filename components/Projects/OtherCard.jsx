import styles from '../Projects/OtherCard.module.scss'
import css from 'classnames'
import { motion } from 'framer-motion'

export const OtherCard = ({ project, darkMode }) => {
    return (
        <a href={project.html_url} target="_blank" rel="noreferrer">
            <motion.div
                className={css(darkMode ? styles.card : styles.lightCard)}
                initial={{ opacity:0,y:40 }}
                whileInView={{ opacity: [0, 1], y: [50, 0] }}
                transition={{ duration: 1,}}
                viewport={{ once: true }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    width={50}
                />
                <div className={styles.textbox}>
                    <div className={styles.title}>{project.name}</div>
                    <div className={styles.description}>{project.description}</div>
                </div>
            </motion.div>
        </a>
    )
}
