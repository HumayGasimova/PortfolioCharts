import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import Image from 'next/image';

import { 
  FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
  faBars,
  faCompress,
  faExclamation,
  faExpand,
  faGear,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { 
  faBell,
  faEnvelope,
  faMoon,
} from '@fortawesome/free-regular-svg-icons';

import styles from './Toolbar.module.scss';
import MenuIcon from '../SmallComponents/MenuIcon/MenuIcon';

import {
  showLangDropdown
} from '../../../lib/slices/portfolioSlice';

import * as Lists from '../../Lists';
import * as Images from '../../constants/images';


type Inputs = {
  example: string
  exampleRequired: string
}

export default function Toobar() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const langDropdownShown = useSelector(
    (state: RootState) => state.portfolio.langDropdownShown,
  )
  const selectedLangKey = useSelector(
    (state: RootState) => state.portfolio.selectedLangKey,
  )
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

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
    }

  }else{

  }
}

const loadImg = (key: string) => {
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
      default:
        return Images.UK_FLAG;
  }
}

const renderDropdowns = () => {
  if(langDropdownShown){
    return(
      <div className={styles.langDropdownWrapper}>
        {Lists.listOfLang.map(el => {
          return(
            <div key={el.id}>
              {el.name}
            </div>
          )
        })}
      </div>
    )

  }
  // else if(){

  // }
}
const renderImage = (key: string) => {
  switch(key){
    case "lang":
    return(
      <div className={styles.toolbarImageWrapper}>
        <Image 
          src={loadImg(selectedLangKey)}
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
            src={loadImg(key)}
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
          {Lists.listOfToolbarItems.map((el, i) => {
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
