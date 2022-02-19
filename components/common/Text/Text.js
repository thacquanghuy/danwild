import React from 'react'
import styles from './index.module.scss'
export default function Title(props) {
  return <p className={styles['text']}>{props.children}</p>
}
