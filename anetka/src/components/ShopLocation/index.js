import styles from "./index.module.css"
import { ShopLocation } from "../../assets/info";

const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {ShopLocation.map((e) => {
        return(
        <div className={styles.locationBox}>
          <div className={styles.up}>
            <img src={e.photo} className={styles.photo}/>
          </div>
          <div className={styles.center}>
            <p className={styles.title}>Piekarnia Anetka</p>
            <div className={styles.titleBox}>
              <p className={styles.textOne}>Adres</p>
              <a className={styles.text} href={e.map}>{e.location}</a>
            </div>
            <div className={styles.titleBox}>
              <p className={styles.textOne}>Kontakt</p>
              <a href={e.number} className={styles.text}>{e.number}</a>
            </div>
            <div className={styles.titleBox}>
              <p className={styles.textOne}>Godziny Otwarcia</p>
              <p className={styles.text}>{e.one}</p>
              <p className={styles.text}>{e.two}</p>
            </div>  
          </div>
        </div>
        )})}
      </div>
    </div>
  )
};

export default Shop;
