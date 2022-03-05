import React from 'react'
import styles from './index.module.scss'
export default function Title(props) {
  const { className = '', onClick = () => {} } = props
  return (
    <p
      onClick={onClick}
      className={`${styles['title']} ${className && className}`}
    >
      {props.children}
    </p>
  )
}
