import React from 'react'
import styles from './product.module.scss'
import { Title, Price } from '../Text'

export default function Product(props) {
  const { image, name, price } = props
  return (
    <div className={`${styles[`product-container`]}`}>
      <img src={image} className={`w-full`} />
      <div className="mt-2">
        <Title>{name}</Title>
      </div>
      <Price className={styles[`product-price`]}>{price}</Price>
    </div>
  )
}
