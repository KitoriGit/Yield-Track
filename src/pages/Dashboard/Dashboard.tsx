import styles from './Dashboard.module.scss';
import { CurrencyCard } from '../../components/finance/CurrencyCard/CurrencyCard';
import { RecentsBuys } from '../../components/finance/RecentBuys/RecentsBuys';
import { Top242 } from '../../components/finance/carousel/Top242/Top242';



export const Dashboard = () => {
  return (
    <>
      <main className={styles.dashboardMain}>
        <CurrencyCard />
        <RecentsBuys />
        <Top242 />
      </main>
    </>
  );
};