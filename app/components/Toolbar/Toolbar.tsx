import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import Image from 'next/image';

import { 
  FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
  faBars,
  faCircleUser,
  faCompress,
  faExclamation,
  faExpand,
  faGear,
  faInbox,
  faRightFromBracket,
  faSearch,
  faSliders,
  faSlidersH,
  faSun
} from '@fortawesome/free-solid-svg-icons';

import { 
  faBell,
  faEnvelope,
  faMoon,
} from '@fortawesome/free-regular-svg-icons';

import styles from './Toolbar.module.scss';

import '../../globals.scss';
import MenuIcon from '../SmallComponents/MenuIcon/MenuIcon';

import {
  showLangDropdown,
  showMessagesDropdown,
  showNotificationsDropdown,
  showProfileDropdown,
  setPortfolioLang,
  setPortfolioMood,
  startClickingMessagesIcon,
  startClickingNotificationsIcon,
  startClickingProfileIcon,
  setFullScreen
} from '../../../lib/slices/portfolioSlice';

import {
  readAllMessages
} from '../../../lib/slices/messagesSlice';


import * as Lists from '../../Lists';
import * as Images from '../../constants/images';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from 'next-themes';
import ToolbarDropdown from '../ToolbarDropdown/ToobarDropdown';


type Inputs = {
  example: string
  exampleRequired: string
}

export default function Toolbar() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  let messagesHeaderTimeout: number;
  let notificationsHeaderTimeout: number;
  let profileHeaderTimeout: number;
  
  const {theme, setTheme} = useTheme();

  const langDropdownShown = useSelector(
    (state: RootState) => state.portfolio.langDropdownShown,
  );
  const messagesDropdownShown = useSelector(
    (state: RootState) => state.portfolio.messagesDropdownShown,
  );
  const notificationsDropdownShown = useSelector(
    (state: RootState) => state.portfolio.notificationsDropdownShown,
  );
  
  const profileDropdownShown = useSelector(
    (state: RootState) => state.portfolio.profileDropdownShown,
  );

  const selectedLangKey = useSelector(
    (state: RootState) => state.portfolio.selectedLangKey,
  );
  const toolbarItems = useSelector(
    (state: RootState) => state.portfolio.toolbarItems,
  );
  const portfolioMood = useSelector(
    (state: RootState) => state.portfolio.portfolioMood,
  );
  
  const messagesList = useSelector(
    (state: RootState) => state.messages.messagesList,
  );

  const notificationsList = useSelector(
    (state: RootState) => state.notifications.notificationsList,
  );

  const fullScreen = useSelector(
    (state: RootState) => state.portfolio.fullScreen,
  );

  const userInfo = useSelector(
    (state: RootState) => state.portfolio.userInfo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
        // Cleaning the unmounted component

        clearTimeout(messagesHeaderTimeout);
        clearTimeout(notificationsHeaderTimeout);
        clearTimeout(profileHeaderTimeout);
    }
}, []);

 const setIconName = (opt: string) => {
    switch(opt){
      case 'faMoon':
        return faMoon;
      case 'faEnvelope':
        return faEnvelope;
      case 'faBell':
        return faBell;
      case 'faExpand':
        return faExpand;
      case 'faCompress':
        return faCompress;
      case 'faBars':
        return faBars;
      case 'faGear':
        return faGear;
      case 'faSun':
        return faSun;
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

 const onToolbarIconClick = (e: React.MouseEvent, btnKey: string) => {
  if(e.button === 2) return;

  if(e.button !== 1){
    switch(btnKey){
      case 'lang': 
        dispatch(showLangDropdown(!langDropdownShown))
        break;
      case 'mood': 
        if(portfolioMood === "light"){
          setTheme("dark");
          dispatch(setPortfolioMood("dark")); 
        }else{
          setTheme("light");
          dispatch(setPortfolioMood("light"));
        }
        break;
      case 'messages':
        messagesHeaderTimeout = window.setTimeout(()=>{
          dispatch(startClickingMessagesIcon());
        }, 0.001);
        dispatch(showMessagesDropdown(!messagesDropdownShown));
        break;
      case 'notifications':
        notificationsHeaderTimeout = window.setTimeout(()=>{
          dispatch(startClickingNotificationsIcon());
        }, 0.001);
        dispatch(showNotificationsDropdown(!notificationsDropdownShown));
        break;
      case 'profile':
        profileHeaderTimeout = window.setTimeout(()=>{
          dispatch(startClickingProfileIcon());
        }, 0.001);
        dispatch(showProfileDropdown(!profileDropdownShown));
        break;
      case 'fullscreen':
        dispatch(setFullScreen(!fullScreen));

        let elem = document.getElementById("app") as any;
        if (fullScreen) {
          console.log(fullScreen)
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }else{
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }
        }
        break;
    }
  }else{

  }
}

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

  const renderDropdowns = () => {
    if(langDropdownShown){
      return(
        <div className={styles.langDropdownWrapper}>
          {Lists.listOfLang.map(el => {
            return(
              <div key={el.id} className={styles.langWrapper} onClick={()=> changeLang(el.key)}>
                <Image 
                  src={loadImg(el.key, null)}
                  alt={el.key}
                  width={23}
                  height={23}
                  quality={100}
                />
                <div className={styles.langName}>
                  {el.name}
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    else if(messagesDropdownShown){
      return(
        <ToolbarDropdown
          iconKey="messagesDropdown"
          header="Messages"
          list={messagesList}
        />
      )
    }
    else if(notificationsDropdownShown){
      return(
        <ToolbarDropdown
          iconKey="notificationsDropdown"
          header="Notifications"
          list={notificationsList}
        />
      )
    }
    else if(profileDropdownShown){
      return(
        <ToolbarDropdown
          iconKey="profileDropdown"
          header={userInfo.fullname}
          list={Lists.listOfProfileSettings}
          userInfo={userInfo}
        />
      )
    }
  }
  const renderImage = (key: string) => {
    switch(key){
      case "lang":
      return(
        <div className={styles.toolbarImageWrapper}>
          <Image 
            src={loadImg(selectedLangKey, null)}
            alt={key}
            width={23}
            height={23}
            quality={100}
          />
      </div>
      );
      case "profile":
        return(<div className={styles.toolbarImageWrapper} style={{width: "36px", height: "36px"}}>
          <Image 
              src={loadImg(key, null)}
              alt={key}
              quality={100}
          />
        </div>);
        default:
          return (<></>)
    }
  }

  const renderListOfToolbarItems = () => {
    return(
      <>
        <div className={styles.toolbarRightPartWrapper}>
          {toolbarItems.map((el, i) => {
            return(
              <div 
                key={i}
                className={styles.toolbarItem}
                onMouseDown={(e) => onToolbarIconClick(e, el.key)}
              >
                {el.type === "icon" ?
                  <FontAwesomeIcon 
                    icon={setIconName(el.name)}
                    color={setIconName(el.name) === faExclamation ? 'red' : 'rgb(165, 165, 165)'}
                    size='lg'
                    spin={el.action === "spin" ? true: false}
                  /> : renderImage(el.key)
                }
              </div>
            )
          })}
          {renderDropdowns()}
        </div>
      </>
    )
  }

  return (
    <div className={styles.toolbarContainerWrapper}>
      <div className={styles.icon}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />

      </div>
      <div className={styles.toolbarWrapper}>
        <div className={styles.toolbarLeftPartWrapper}>
          <MenuIcon/>
          <div className={styles.searchFieldWrapper}>
             <form onSubmit={handleSubmit(onSubmit)}>
              <input className={styles.searchField} placeholder="Search for anything..." {...register("example")} />
              <FontAwesomeIcon 
                icon={faSearch}
                color='rgb(165, 165, 165)'
                size='sm'
              />
            </form>
          </div>
        </div>
        {renderListOfToolbarItems()}
      </div>
    </div>
  )
}
