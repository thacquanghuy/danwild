import React from 'react'
import styles from './product.module.scss'
import { Title, Price } from '../Text'

export default function Product(props) {
  const { image, name, price } = props
  return (
    <div
      className={`${
        styles[`product-container`]
      } mr-4 inline-block w-3/5 md:mr-0 md:block md:w-full`}
    >
      <img src={image} className={`w-full`} />
      <div className="mt-2">
        <Title>{name}</Title>
      </div>
      <Price className={styles[`product-price`]}>{price}</Price>
    </div>
  )
}
