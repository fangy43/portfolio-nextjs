import styles from '../Projects/ProjectCard.module.scss'

export const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imagebox}>
                <img className={styles.img} src={project.img} />
            </div>
            <div className={styles.textbox}>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.period}>{project.period}</div>
                <div className={styles.description}>{project.description}</div>
            </div>
            <div className={styles.link}>
            <a href="https://github.com/fangy43" target="_blank">
                <button className={styles.btn}>See Github</button>
            </a>
            </div>
        </div >
    )
}
