import styles from './index.module.css'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'
import React, { useEffect, useState } from 'react';
import { CompanyInfo } from '../../assets/info';

function MenuLanguage() {

    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition <= 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return (
    <div className={styles.containerBox}>
    {isVisible ?
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.emailBox}>
                <BsEnvelopeFill className={styles.icon}/>
                <p>{CompanyInfo.email}</p>
            </div>
            <div className={styles.phoneBox}>
                <BsFillTelephoneFill className={styles.icon}/>
                <p>{CompanyInfo.phone}</p>
            </div>
        </div>
    </div>
    :
    null
    }
    </div>
);
}

export default MenuLanguage;