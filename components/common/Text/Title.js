import React from 'react'
import styles from './index.module.scss'
export default function Title(props) {
  return <p className={styles['title']}>{props.children}</p>
}
