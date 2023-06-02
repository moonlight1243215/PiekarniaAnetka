import styles from "./index.module.css"
import { useState } from "react";
import { CompanyInfo } from '../../assets/info';
import { Gallery } from "../../assets/info";
import { Filter } from "../../assets/info";

const FourthView = (props) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredData = selectedOption
    ? Gallery.filter((item) => item.type === selectedOption)
    : Gallery;
  
  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.con}>
            <div className={styles.titleBox}>
              <img src={CompanyInfo.logoBlack} className={styles.logo}/>
              <div className={styles.selectBox}>
                <select
                className={styles.select}
                value={selectedOption}
                onChange={handleOptionChange}>
                    {Filter.map((e) => (
                       <option className={styles.option} value={e.value}>{e.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className={styles.productContainer}>
              {filteredData.map((e) =>{
                return (
                  <div className={styles.productBox}>
                    <img src={e.photo} className={styles.productImage} />
                    <div className={styles.productTitle}>
                      <p className={styles.name}>{e.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  )
};

export default FourthView;
