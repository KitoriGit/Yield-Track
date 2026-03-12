import { Bell } from 'lucide-react';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Mis activos</h1>
            <div className={styles.notificationContainer}>
                <Bell color="white" />
            </div>
        </header>
    )
}
