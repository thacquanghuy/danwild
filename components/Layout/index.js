import React from 'react'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={`${styles['app-container']} flex h-screen flex-col`}>
      {children}
    </div>
  )
}
