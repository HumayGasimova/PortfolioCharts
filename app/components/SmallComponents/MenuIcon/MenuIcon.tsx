import React from 'react';
import styles from './MenuIcons.module.scss';

export default function MenuIcon() {
  return (
    <div className={styles.menuIconWrapper}>
        <div className={styles.menuIconLongLine}/>
        <div className={styles.menuIconShortLine}/>
        <div className={styles.menuIconLongLine}/>
        <div className={styles.menuIconShortLine}/>
    </div>
  )
}