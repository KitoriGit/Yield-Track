import styles from './_RecentBuys.module.scss';

export const RecentsBuys = () => {
    return (
        <article className={styles.recentsBuysContainer}>
            <header>
                <h2>Recents Buys</h2>
                <button type="button" className={styles.newTransactionBtn}>
                    Nueva transacción
                </button>
            </header>
            <ul className={styles.recentsBuysList}>
                <li className={styles.active}>
                    <strong className={styles.ticker}>AMD</strong>
                    <div className={styles.head}>
                        <strong>Advanced Micro Devices</strong>
                        <span>10 unidades - $150</span>
                    </div>
                    <div className={styles.price}>
                        <strong>$1,200.00</strong>
                        <span>+1.5% Today</span>
                    </div>
                </li>
                <li className={styles.active}>
                    <strong className={styles.ticker}>AMD</strong>
                    <div className={styles.head}>
                        <strong>Advanced Micro Devices</strong>
                        <span>10 unidades - $150</span>
                    </div>
                    <div className={styles.price}>
                        <strong>$1,200.00</strong>
                        <span>+1.5% Today</span>
                    </div>
                </li>
                <li className={styles.active}>
                    <strong className={styles.ticker}>AMD</strong>
                    <div className={styles.head}>
                        <strong>Advanced Micro Devices</strong>
                        <span>10 unidades - $150</span>
                    </div>
                    <div className={styles.price}>
                        <strong>$1,200.00</strong>
                        <span>+1.5% Today</span>
                    </div>
                </li>
            </ul>
        </article>
    )
}