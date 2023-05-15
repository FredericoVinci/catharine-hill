// @ts-nocheck

import styles from "./style.css"

import React from 'react';


import { canUseDOM } from 'vtex.render-runtime';


type Props = {
  children: any
}

export default function ComprePorCategoriaCard({ children }) {

  if (canUseDOM) {
    return (
      <>
        <div className={styles.cardHolder}>
          <div className={styles.imageHolder}>
            {children[0]}
          </div>
          {children[1]}
          <div className={styles.link}>{children[2]}</div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}
