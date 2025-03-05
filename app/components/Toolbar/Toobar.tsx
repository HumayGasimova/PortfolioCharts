import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

import styles from './Toolbar.module.scss';
import MenuIcon from '../SmallComponents/MenuIcon/MenuIcon';

import * as Lists from '../../Lists';

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

  const renderListOfToolbarItems = () => {
    return(
      <div className={styles.toolbarRightPartWrapper}>
          {Lists.listOfToolbarItems.map((el, i) => {
              return(
                  <div 
                    key={i}
                    className={styles.toolbarItem}
                    // onMouseDown={(e) => onPageClickHandler(e, "pageNumber", el.id)}
                  >
                    {el.type === "icon" ?
                      <FontAwesomeIcon 
                        icon={setIconName(el.name)}
                        color={setIconName(el.name) === faExclamation ? 'red' : 'rgb(165, 165, 165)'}
                        size='lg'
                        spin={el.action === "spin" ? true: false}
                      /> : 
                      null
                    }
                  </div>
              )
          })}
      </div>
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
