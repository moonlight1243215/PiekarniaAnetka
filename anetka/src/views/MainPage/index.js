import Counter from '../../components/Counter';
import FirstView from '../../components/FirstView';
import Footer from '../../components/Footer';
import FourthView from '../../components/FourthView';
import Menu from '../../components/Menu';
import News from '../../components/News';
import SecondView from '../../components/SecondView';
import ThirdView from '../../components/ThirdView';
import styles from './index.module.css';

function MainPage() {

  return (
    <div className={styles.container}>
      <Menu/>
      <FirstView />
      <div className={styles.gap}></div>
      <SecondView />
      <div className={styles.gap}></div>
      <News />
      <div className={styles.gap}></div>
      <Counter />
      <div className={styles.gap}></div>
      <ThirdView />
      <div className={styles.gap}></div>
      <FourthView />
      <div className={styles.gap}></div>
      <Footer />
    </div>
  );
}

export default MainPage;