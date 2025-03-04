import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

import styles from './Toolbar.module.scss';
import MenuIcon from '../SmallComponents/MenuIcon/MenuIcon';

import { 
  FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
  faSearch
} from '@fortawesome/free-solid-svg-icons';

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

  console.log(watch("example")) // watch input value by passing the name of it

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
              <input className={styles.searchField} defaultValue="Search for anything..." {...register("example")} />
              <FontAwesomeIcon 
              icon={faSearch}
              color='rgb(165, 165, 165)'
              size='sm'
            />
            </form>
          
          </div>
      
        </div>
        <div className={styles.toolbarRightPartWrapper}>
          <div>List of icons</div>
        </div>
      </div>
    </div>
  )
}
