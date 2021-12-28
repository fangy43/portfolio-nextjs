import styles from '../Projects/OtherCard.module.scss'

export const OtherCard = ({ project }) => {
    return (
        <a href={project.html_url} target="_blank" rel="noreferrer">
            <div className={styles.card}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    width={50}
                />
                <div className={styles.textbox}>
                    <div className={styles.title}>{project.name}</div>
                    <div className={styles.description}>{project.description}</div>
                </div>
            </div>
        </a>
    )
}
