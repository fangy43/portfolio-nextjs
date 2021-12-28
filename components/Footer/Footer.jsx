import styles from "../Footer/Footer.module.scss"
export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Contact</div>
            <div className={styles.contactList}>
                <div className={styles.contactItem}>
                <i className="fa fa-phone"></i>
                    <div className={styles.details}>
                        <div className={styles.method}>Tel</div>
                        <div className={styles.data}>080-284-8185</div>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <i className="fa fa-globe"></i>
                    <div className={styles.details}>
                        <div className={styles.method}>E-mail</div>
                        <div className={styles.data}>nattarat.srr@gmail.com</div>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <i className="fa fa-facebook-square"></i>
                    <div className={styles.details}>
                        <div className={styles.method}>Facebook</div>
                        <div className={styles.data}>Nattarat Serirat</div>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <i className="fa fa-github"></i>
                    <div className={styles.details}>
                        <div className={styles.method}>Github</div>
                        <div className={styles.data}>fangy43</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
