import { useState } from 'react';
import MenuInfo from '../MenuInfo';
import MenuLanguage from '../MenuLanguage';
import styles from './index.module.css'

function Menu() {

return (
<div className={styles.container}>
    <MenuLanguage />
    <MenuInfo />
</div>
);
}

export default Menu;