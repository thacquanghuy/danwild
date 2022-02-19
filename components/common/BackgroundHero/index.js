import React from 'react'
import styles from './background-hero.module.scss'

export default function BackgroundHero(props) {
  const { image, styleClass } = props
  return (
    <img src={image} className={`w-full ${styles[`background-hero`]}`}></img>
  )
}
