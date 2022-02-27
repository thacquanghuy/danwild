import React from 'react'
import styles from './index.module.scss'
export default function Title(props) {
  const { className = '' } = props
  return (
    <p className={`${styles['title']} ${className && className}`}>
      {props.children}
    </p>
  )
}
