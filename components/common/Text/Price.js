import React from 'react'
import styles from './index.module.scss'

export default function Price(props) {
  return <p className={styles[`price`]}>{props.children}</p>
}
