import React from 'react'
import styles from './button.module.scss'
export default function Button(props) {
  const { text = 'a' } = props
  return <button className={`${styles[`button`]}`}>{text}</button>
}
