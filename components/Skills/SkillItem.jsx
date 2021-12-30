import styles from './SkillItem.module.scss'
export const SkillItem = ({imgLink,name}) => {
    return (
        <div className={styles.container}>
        <img className={styles.img} src={imgLink}/>
        {name}
        </div>
        
    )
}
