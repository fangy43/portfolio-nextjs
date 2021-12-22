import React from 'react'
import styles from './SkillItem.module.scss'
export const SkillItem = ({imgLink,name}) => {
    console.log(imgLink)
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            width:"120px"
        }}>
        <img className={styles.img} src={imgLink}/>
        <h3>{name}</h3>
        </div>
        
    )
}
