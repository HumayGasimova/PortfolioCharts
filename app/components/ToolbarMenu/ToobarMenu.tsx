import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import Image from 'next/image';

import styles from './ToolbarMenu.module.scss';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ToolbarMenu(props: any) {  
  let winHeigt;
  const listOfMenuBtns = useSelector(
    (state: RootState) => state.portfolio.listOfMenuBtns,
  );

  useEffect(()=>{
    winHeigt = window.innerHeight;
  }, [])
  const dispatch = useDispatch();

  const btnOnClick = (key: string) => {

  }

  const renderClassName = (state: any) => {
    switch(state){
         case 'init':
             return styles.menuWrapper;  
         case 'open':
             return styles.menuWrapperOpen;  
         case 'close':
             return styles.menuWrapperClose;  
    }
 }
 
 const renderMenuBtns = () => {
  return(
    <div className={styles.langDropdownWrapper}>
      {listOfMenuBtns.map((el,i) => {
        return(
          <div key={i} className={styles.langWrapper} onClick={()=> btnOnClick(el.key)}>
            {/* <Image 
              src={loadImg(el.key, null)}
              alt={el.key}
              width={23}
              height={23}
              quality={100}
            />
            <div className={styles.langName}>
              {el.name}
            </div> */}
          </div>
        )
      })}
    </div>
  )
 }

  return (
    <div className={renderClassName(props.menuShown)} style={{height: winHeigt}}>
      <div className={styles.headerWrapper}>
        {props.header}
        <FontAwesomeIcon 
          icon={faX}
          size='sm'/>
      </div>
      <div className={styles.line}></div>
      {renderMenuBtns()}
      <div></div>
    </div>
  )
}
