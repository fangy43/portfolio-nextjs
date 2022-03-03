import styles from './SkillItem.module.scss'
import { motion } from "framer-motion";

export const SkillItem = ({ imgLink, name, index }) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity:0}}
            whileInView={{ opacity:[0,1],scale:[0,1.1,1] }}
            transition={{duration:Math.random()*1.5+0.5,type: "spring", bounce: 0.5}}
        >
            <motion.img
                // animate={{ y: [0, (Math.random() * -4) -3, 0] }}  //-3 - -7
                // transition={{ duration: Math.random() * 3 + 1.5, repeat: Infinity, repeatType: "reverse", }} //0-2
                className={styles.img}
                src={imgLink}
            />
            {name}
        </motion.div >

    )
}
