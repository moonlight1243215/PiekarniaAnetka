import styles from './index.module.css'
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";
import { CompanyInfo } from '../../assets/info';

function Footer() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.info}>
            <div className={styles.infoBox}>
                <p>Adres</p>
                <p>{CompanyInfo.name}</p>
                <p>{CompanyInfo.city}</p>
                <p>{CompanyInfo.location}</p>
            </div>
            <div className={styles.infoBox}>
                <p>Kontakt</p>
                <div className={styles.mailBox}>
                    <p>E-mail:</p>
                    <div className={styles.right}>
                        <p>{CompanyInfo.email}</p>
                    </div>
                </div>
                <div className={styles.telBox}>
                    <p>Tel:</p>
                    <div className={styles.right}>
                        <p>{CompanyInfo.phone}</p>
                    </div>
                </div>
            </div>
            <div className={styles.infoBox}>
                <iframe className={styles.map} src={CompanyInfo.map}></iframe>
            </div>
            <div className={styles.social}>
                <a href={CompanyInfo.facebook} className={styles.facebook}>
                    <FaFacebookF />
                </a>
                <a href={CompanyInfo.instagram}  className={styles.instagram}>
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    </div>
</div>
);
}

export default Footer;