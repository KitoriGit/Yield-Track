import styles from './_CurrencyCard.module.scss';

export const CurrencyCard = () => {
    return (
        <article className={styles.cardContainer}>
            <h2 className={styles.cardTitle}>VALOR TOTAL DEL PORTAFOLIO</h2>
            <div>
                <strong>$10,200.00</strong>
                <span>+5.4%</span>
            </div>
            <span>Actualizado hace 5 min</span>
        </article>
    )
}
