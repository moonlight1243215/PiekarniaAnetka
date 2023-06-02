import styles from "./index.module.css"
import Count from '../CountTo'

const Counter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.contentBox}>
                <p className={styles.title}>NASZE PIEKARNIE</p>
                <Count className={styles.number} maxNumber={20} duration={4000} />
            </div>
            <div className={styles.contentBox}>
                <p className={styles.title}>ROK ZAŁOŻENIA</p>
                <Count className={styles.number} maxNumber={1997} duration={4000} />
            </div>
            <div className={styles.contentBox}>
                <p className={styles.title}>LICZBA PRODUKTÓW</p>
                <Count className={styles.number} maxNumber={1300} duration={4000} />
            </div>
            <div className={styles.contentBox}>
                <p className={styles.title}>PRACOWNICY</p>
                <Count className={styles.number} maxNumber={600} duration={4000} />
            </div>
        </div>
    </div>
  )
};

export default Counter;
