import React from 'react';

import styles from './Toolbar.module.scss';
import MenuIcon from '../SmallComponents/MenuIcon/MenuIcon';

export default function Toobar() {
  return (
    <div className={styles.toolbarContainerWrapper}>
      <div className={styles.icon}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />

      </div>
      <div className={styles.toolbarWrapper}>
        <div className={styles.toolbarLeftPartWrapper}>
          <MenuIcon/>
          <div>Search</div>
        </div>
        <div className={styles.toolbarRightPartWrapper}>
          <div>List of icons</div>
        </div>
      </div>
    </div>
  )
}
