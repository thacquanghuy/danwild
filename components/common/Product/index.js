import React, { useContext } from 'react'
import styles from './product.module.scss'
import { Title, Price } from '../Text'
import { AiOutlineShopping } from 'react-icons/ai'
import { ADD_ITEM_TO_CART } from '../../../context/cartActionType'
import { CartContext } from '../../../context/cart'

export default function Product(props) {
  const { image, name, price, data } = props
  const [state, dispatch] = useContext(CartContext)
  const onAdd = () => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        item: data,
      },
    })
  }
  return (
    <div
      className={`${
        styles[`product-container`]
      } mr-4 inline-block w-3/5 md:mr-0 md:block md:w-full`}
    >
      <div className={styles[`image-container`]}>
        <img src={image} className={`w-full ${styles['product-image']}`} />
        <button onClick={onAdd} className={`${styles['cart-button']}`}>
          Add to cart
          <AiOutlineShopping size={20} className="ml-2" />
        </button>
      </div>

      <div className="mt-2">
        <Title>{data.name}</Title>
      </div>
      <Price className={styles[`product-price`]}>{data.price}</Price>
    </div>
  )
}
