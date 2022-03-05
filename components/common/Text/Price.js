import React from 'react'
import styles from './index.module.scss'
import CurrencyFormat from 'react-currency-format'

export default function Price({ text = '', className = '' }) {
  return (
    <p className={`${styles[`price`]} ${className && className}`}>
      <CurrencyFormat
        thousandSeparator={true}
        value={text}
        displayType={'text'}
      />
    </p>
  )
}
