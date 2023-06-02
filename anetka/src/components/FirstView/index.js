import styles from './index.module.css'
import { FaArrowDown, FaHeart } from "react-icons/fa";
import { GiStairsCake } from "react-icons/gi";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { CompanyInfo } from '../../assets/info';

function FirstView() {

const Style = {
    backgroundImage: `url(${CompanyInfo.background})`
}   

return (
<div className={styles.container}>
    <div className={styles.box} style={Style}>
        <div className={styles.sectionOne}></div>
        <div className={styles.sectionTwo}>
            <GiStairsCake className={styles.logo}/>
            <img src={CompanyInfo.logoBlack} className={styles.mainText} />
            <div className={styles.titleBox}>
                <p className={styles.title}>{CompanyInfo.firstView.one}</p>
                <FaHeart className={styles.square}/>
                <p className={styles.title}>{CompanyInfo.firstView.two}</p>
                <FaHeart className={styles.square}/>
                <p className={styles.title}>{CompanyInfo.firstView.three}</p>
                <ScrollLink to="box" smooth={true} duration={500} className={styles.down}>
                    <FaArrowDown className={styles.arrow}/>
                </ScrollLink>
            </div>
        </div>
        <div className={styles.sectionThree}></div>
        <div className={styles.sectionFour}></div>
    </div>
</div>
);
}

export default FirstView;