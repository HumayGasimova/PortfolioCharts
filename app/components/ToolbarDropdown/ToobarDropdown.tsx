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
import { 
  faExclamation, 
  faFileLines,
  faGem,
  faPizzaSlice,
  faEnvelope,
  faUserCheck,
  faCircleCheck,
  faChevronRight,
  faGear,
  faCircleUser,
  faInbox,
  faSlidersH,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ToolbarDropdown(props: any) {  

  const messagesHeaderHeight = useSelector(
    (state: RootState) => state.portfolio.messagesHeaderHeight,
  )

  const notificationsHeaderHeight = useSelector(
    (state: RootState) => state.portfolio.notificationsHeaderHeight,
  )

  const profileHeaderHeight = useSelector(
    (state: RootState) => state.portfolio.profileHeaderHeight,
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

  const onItemClick = (key: string) => {
    console.log("item clicked")
    // dispatch(showLangDropdown(false));
    // dispatch(setPortfolioLang(key));
  }

  const readAllMessagesBtnHandler = () => {
    dispatch(readAllMessages());
  }

  const showChatPage = () => {
    console.log("Redirect to chat page")
  }

  const setRightPosition = () => {
      switch(props.iconKey){
        case "messagesDropdown":
          return "235px";
        case "notificationsDropdown":
          return "200px";
          case "profileDropdown":
            return "73px";
        default:
            return "0px";
      }
  }

  const setDropdownWidth = () => {
    switch(props.iconKey){
      case "messagesDropdown":
        case "notificationsDropdown":
        return 300;
        case "profileDropdown":
          return 200;
      default:
          return 0;
    }
  }

  const setDropdownHeight = () => {
    switch(props.iconKey){
      case "messagesDropdown":
        case "notificationsDropdown":
        return "340px";
        case "profileDropdown":
          return "318px";
      default:
          return "0px";
    }
  }

  const setMessagesHeaderHeight = (key: string) => {
    switch(key){
      case "messagesDropdown":
        return `${messagesHeaderHeight}px`;
      case "notificationsDropdown":
        return `${notificationsHeaderHeight}px`;
      case "profileDropdown":
        return `${profileHeaderHeight}px`;
      default:
        return 0;
    }
  }

  const setElemenyId = (key: string) => {
    switch(key){
      case "messagesDropdown":
        return "messagesHeader";
      case "notificationsDropdown":
        return "notificationsHeader";
      case "profileDropdown":
        return "profileHeader";
    }
  }

  const setIconName = (opt: string) => {
     switch(opt){
       case 'faFileLines':
         return faFileLines;
      case 'faGem':
        return faGem;
      case 'faPizzaSlice':
        return faPizzaSlice;
      case 'faEnvelope':
        return faEnvelope;
      case 'faUserCheck':
        return faUserCheck;
      case 'faCircleCheck':
        return faCircleCheck;
      case 'faGear':
        return faGear;
      case 'faCircleUser':
        return faCircleUser;
      case 'faInbox':
        return faInbox;
      case 'faEnvelope':
        return faEnvelope;
      case 'faSliders':
        return faSlidersH;
      case 'faRightFromBracket':
        return faRightFromBracket;
      default:
         return faExclamation;
     }
  }

  return (
    <div className={styles.dropdownArrow} style={{right: setRightPosition(), width: setDropdownWidth(), height: setDropdownHeight()}}>
      <div className={styles.dropdownWrapper}>
        <div className={styles.dropdownHeader} id={setElemenyId(props.iconKey)} style={{width: `${setDropdownWidth() - 2}px`, justifyContent: props.iconKey === "profileDropdown" ? "start" : "space-around"}}>
          <div>
            <div className={styles.header}>{props.header}</div>
            {props.iconKey === "profileDropdown" ? 
            <div className={styles.subheader}>{props.userInfo.role}</div> : 
            <div className={styles.subheader}>You have {props.list.length} unread messages</div>}
          </div>
         {props.iconKey !== "profileDropdown" ? <div className={styles.headerBtn} onClick={readAllMessagesBtnHandler}>Mark All Read</div> : null}
        </div>
        <div 
          className={styles.dropdownItemWrapper} 
          style={{top: setMessagesHeaderHeight(props.iconKey)}}
        >
          {props.list.map((el: any) => {
            if(props.iconKey === "messagesDropdown"){
              return(
                <div key={el.id} className={styles.messageWrapper} onClick={()=> onItemClick(el.key)}>
                  <Image 
                    src={loadImg(el.key, el.photo)}
                    alt={el.key}
                    className={styles.photo}
                  />
                  <div className={styles.activity} style={{backgroundColor: el.action === "online" ? "rgb(18, 187, 18)" : "rgb(148 158 183)"}}/>
                  <div>
                    <div className={styles.fullname}>{el.fullName}</div>
                    <div className={styles.message}>{el.message.substring(0, 52)}......</div>
                    <div className={styles.date}>{el.date}</div>
                  </div>
                </div>
              )
            }else if(props.iconKey === "notificationsDropdown"){
              return(
                <div key={el.id} className={styles.notificationWrapper} onClick={()=> onItemClick(el.key)}>
                  <div className={styles.notificationIconTextWrapper}>
                    <div className={styles.notificationIconCircle} style={{backgroundColor: el.color}}>
                      <FontAwesomeIcon 
                        icon={setIconName(el.icon)}
                        color="white"
                        size='sm'
                      />
                    </div>
                    <div>
                      <div className={styles.itemHeader}>{el.header}</div>
                      <div className={styles.date}>{el.date}</div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon 
                      icon={faChevronRight}
                      color="rgb(128, 128, 128)"
                      size='sm'
                    />
                  </div>
                </div>
              )
            }
            else if(props.iconKey === "profileDropdown"){
              return(
                <div key={el.id} className={styles.profileWrapper} onClick={()=> onItemClick(el.key)}>
                  <div className={styles.profileIconTextWrapper}>
                    <div className={styles.profileIcon} style={{backgroundColor: el.color}}>
                      <FontAwesomeIcon 
                        icon={setIconName(el.iconName)}
                        size='lg'
                      />
                    </div>
                    <div className={styles.item}>{el.label}</div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
      {props.iconKey !== "profileDropdown" ?
      <div className={styles.dropdownFooter}>
        <div className={styles.viewAllbtn} onClick={showChatPage}>VIEW ALL</div>
      </div> 
    : null }
     
  </div>
  )
}
