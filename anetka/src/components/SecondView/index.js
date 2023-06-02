import styles from './index.module.css'
import { CompanyInfo } from '../../assets/info';
import { Content } from '../../assets/info';

function SecondView() {

const Style = {
    backgroundImage: `url(${CompanyInfo.background})`
}   

return (
<div id="box" className={styles.container}>
    <div className={styles.box}>
        <div className={styles.left}>
            <p className={styles.title}>O NAS</p>
            <p>{Content.about}</p>
        </div>
        <div className={styles.right} style={Style}></div>
    </div>
</div>
);
}

export default SecondView;