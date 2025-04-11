import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import Image from 'next/image';

import styles from './ToolbarDropdown.module.scss';

import {
  showLangDropdown,
  setPortfolioLang,
} from '../../../lib/slices/portfolioSlice';

import {
  readAllMessages
} from '../../../lib/slices/messagesSlice';


import * as Lists from '../../Lists';
import * as Images from '../../constants/images';


export default function ToolbarDropdown(props: any) {  

  const messagesHeaderHeight = useSelector(
    (state: RootState) => state.portfolio.messagesHeaderHeight,
  )

  const dispatch = useDispatch();


  const loadImg = (key: string, personPhoto: any) => {
    switch(key) {
        case 'azeri':
          return Images.AZERI_FLAG;
        case 'rus':
          return Images.RUS_FLAG;
        case 'eng':
          return Images.UK_FLAG;
        case 'german':
          return Images.GERMANS_FLAG;
        case 'spanish':
          return Images.SPAIN_FLAG;
        case 'profile':
          return Images.PROFILE_FHOTO;
        case 'person':
          switch (personPhoto) {
            case 'personPhoto1':
              return Images.PERSON_PHOTO_1;
            case 'personPhoto2':
              return Images.PERSON_PHOTO_2;
            case 'personPhoto3':
              return Images.PERSON_PHOTO_3;
            case 'personPhoto4':
              return Images.PERSON_PHOTO_4;
            case 'personPhoto5':
              return Images.PERSON_PHOTO_5;
            default:
                return Images.NO_PHOTO;
          }
        default:
          return Images.NO_IMAGE;
    }
  }

  const changeLang = (key: string) => {
    dispatch(showLangDropdown(false));
    dispatch(setPortfolioLang(key));
  }

  const readAllMessagesBtnHandler = () => {
    dispatch(readAllMessages());
  }

  const showChatPage = () => {
    console.log("Redirect to chat page")
  }

  return (
    <div className={styles.messagesDropdownArrow}>
      <div className={styles.messagesDropdownWrapper}>
        <div className={styles.messagesHeader} id="messagesHeader">
          <div>
            <div className={styles.header}>{props.header}</div>
            <div className={styles.unreadMessages}>You have {props.list.length} unread messages</div>
          </div>
          <div className={styles.headerBtn} onClick={readAllMessagesBtnHandler}>Mark All Read</div>
        </div>
        <div 
          className={styles.messagesWrapper} 
          style={{top: `${messagesHeaderHeight}px`}}
        >
          {props.list.map((el: any) => {
            return(
              <div key={el.id} className={styles.messageWrapper} onClick={()=> changeLang(el.key)}>
                <Image 
                  src={loadImg(el.key, el.photo)}
                  alt={el.key}
                  className={styles.photo}
                />
                <div>
                  <div className={styles.fullname}>{el.fullName}</div>
                  <div className={styles.message}>{el.message.substring(0, 52)}......</div>
                  <div className={styles.date}>{el.date}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.messagesFooter}>
          <div onClick={showChatPage}>VIEW ALL</div>
      </div>
  </div>
  )
}
