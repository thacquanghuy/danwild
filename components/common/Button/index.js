import React from 'react'
import styles from './button.module.scss'
export default function Button(props) {
  const { text = 'a', className = '', onClick = () => {} } = props
  return (
    <button
      onClick={onClick}
      className={`${styles[`button`]} ${className && className}`}
    >
      {text}
    </button>
  )
}
