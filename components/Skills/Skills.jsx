import styles from '../Skills/Skills.module.scss'
import { SkillItem } from './SkillItem'

const skillList = [
    {
        skill:"HTML",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
    },
    {
        skill:"CSS",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
    },
    {
        skill:"JavaScript",
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
    {
        skill:"React",
        img:"https://miro.medium.com/max/512/1*TDmHpruznMeFMFhkDJJxRg.png"
    },
    {
        skill:"Nextjs",
        img:"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.png"
    },
    {
        skill:"Ant Design",
        img:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    },
    {
        skill:"SASS",
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
    },
    {
        skill:"NodeJS",
        img:"https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
    },
    {
        skill:"Git",
        img:"https://miro.medium.com/max/325/0*oNDKpj0zdg_UELBE.png"
    },
    {
        skill:"Postman",
        img:"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/postman.png"
    },
    {
        skill:"Figma",
        img:"https://cdn2.downdetector.com/static/uploads/logo/figma2.png"
    }
  
]
export const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Skills</div>
            <div className={styles.skills}>
                
                <div className={styles.skillsLogo}>
                    {skillList.map((s,i)=>
                    <SkillItem imgLink={s.img} name={s.skill} key={i}/>
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <a href="#Projects" className={styles.arrow}>
                    <img
                        src="/down-arrow.png"
                        width={30}
                        height={30}
                        className={styles.arrowimg}
                    />
                </a>
            </div>
        </div>
    )
}
