import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={`${styles['app-container']} pb-10`}>
      <main>{children}</main>
    </div>
  )
}
