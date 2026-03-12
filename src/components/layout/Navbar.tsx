import { NavLink } from 'react-router-dom';
import { Home, PieChart, History, Settings } from 'lucide-react';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.navItem}>
                <Home size={24} />
                <span className={styles.label}>Inicio</span>
            </NavLink>
            <NavLink to="/history" className={styles.navItem}>
                <History size={24} />
                <span className={styles.label}>Historial</span>
            </NavLink>
            <NavLink to="/simulador" className={styles.navItem}>
                <PieChart size={24} />
                <span className={styles.label}>Simulador</span>
            </NavLink>
            <NavLink to="#" className={styles.navItem}>
                <Settings size={24} />
                <span className={styles.label}>Configuración</span>
            </NavLink>
        </nav>
    );
};