import Slider from '../Slider/index';
import styles from './index.module.css'
import { Content } from '../../assets/info';

function ThirdView() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.left}>
            <p className={styles.title}>REALIZACJE</p>
            <p className={styles.text}>{Content.realizations}</p>
        </div>
        <div className={styles.right}>
            <Slider />
        </div>
    </div>
</div>
);
}

export default ThirdView;