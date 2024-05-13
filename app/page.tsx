'use client'

import styles from './page.module.css'
import {useState} from 'react'
import cn from 'classnames'

export default function Main(){
  const [menuActive, setMenuActive] = useState(false);
  return(
    <>
    <div className={styles.header}>
      <button className={styles.btn} onClick={()=>(setMenuActive(!menuActive))}>Меню</button>
    </div>
    <div className={cn(styles.menu,{
      [styles.active]: menuActive == true
    })}>
      <p>About</p>
      <p>Shop</p>
      <p>Contact</p>
      <p>Call</p>
    </div>
    </>
  )
}