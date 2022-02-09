import styles from './SkillItem.module.scss'
import { motion } from "framer-motion";

export const SkillItem = ({ imgLink, name, index }) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: Math.random(), duration: 2 }} //0-2
        >
            <motion.img
                animate={{ y: [0, (Math.random() * -4) -3, 0] }}  //-3 - -7
                transition={{ duration: Math.random() * 3 + 1.5, repeat: Infinity, repeatType: "reverse", }} //0-2
                className={styles.img}
                src={imgLink}
            />
            {name}
        </motion.div >

    )
}
