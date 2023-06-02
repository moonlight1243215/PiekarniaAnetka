import styles from "./index.module.css";
import Menu from '../../components/Menu';
import FirstView from '../../components/FirstView';
import Footer from "../../components/Footer";
import Counter from "../../components/Counter";
import TextViewTwo from '../../components/Offers';

const WorkPage = (props) => {
  return (
    <div>
      <Menu />
      <FirstView />
      <div className={styles.gap}></div>
      <TextViewTwo />
      <div className={styles.gap}></div>
      <Counter />
      <div className={styles.gap}></div>
      <Footer />
    </div>
  )
};

export default WorkPage;
