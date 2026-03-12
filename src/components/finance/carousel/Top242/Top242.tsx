import styles from './_Top242.module.scss';


export const Top242 = () => {
    return (
        <article className={styles.top242}>
            <h2>Top ganadores/perdedores</h2>
            <div className={styles.topGallery}>
                <div className={styles.gainTop}>
                    <strong>AMD</strong>
                    <span>+1.5%</span>
                </div>
                <div className={styles.gainTop}>
                    <strong>AMD</strong>
                    <span>+1.5%</span>
                </div>
                <div className={styles.loseTop}>
                    <strong>NVDA</strong>
                    <span>-2.3%</span>
                </div>
                <div className={styles.loseTop}>
                    <strong>NVDA</strong>
                    <span>-2.3%</span>
                </div>
            </div>
        </article>
    )
}
