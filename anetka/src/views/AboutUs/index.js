import styles from "./index.module.css";
import Menu from '../../components/Menu';
import FirstView from '../../components/FirstView';
import Footer from "../../components/Footer";
import Counter from "../../components/Counter";
import TextView from '../../components/TextView';

const AboutUs = (props) => {
  return (
    <div>
      <Menu />
      <FirstView />
      <div className={styles.gap}></div>
      <TextView />
      <div className={styles.gap}></div>
      <Counter />
      <div className={styles.gap}></div>
      <Footer />
    </div>
  )
};

export default AboutUs;
