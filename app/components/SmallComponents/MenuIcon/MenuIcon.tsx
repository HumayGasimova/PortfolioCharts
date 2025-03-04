import React from 'react';
import styles from './MenuIcons.module.scss';

export default function MenuIcon() {

  const onMenuIconClick = () => {
  }

  return (
    <div className={styles.menuIconWrapper} onClick={onMenuIconClick}>
        <div className={styles.menuIconLongLine}/>
        <div className={styles.menuIconShortLine}/>
        <div className={styles.menuIconLongLine}/>
        <div className={styles.menuIconShortLine}/>
    </div>
  )
}