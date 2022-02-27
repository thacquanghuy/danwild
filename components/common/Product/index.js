import React, { useContext } from 'react'
import styles from './product.module.scss'
import { Title, Price } from '../Text'
import { AiOutlineShopping } from 'react-icons/ai'
import { ADD_ITEM_TO_CART } from '../../../context/cartActionType'
import { CartContext } from '../../../context/cart'
import CurrencyFormat from 'react-currency-format'

export default function Product(props) {
  const { data } = props
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
      } mr-4 inline-block w-3/5 overflow-hidden md:mr-0 md:block md:w-full`}
    >
      <div className={styles[`image-container`]}>
        <img src={data.image} className={`w-full ${styles['product-image']}`} />
        <button onClick={onAdd} className={`${styles['cart-button']}`}>
          Thêm vào giỏ
          <AiOutlineShopping size={20} className="ml-2" />
        </button>
      </div>

      <div className="mt-2">
        <Title>{data.name}</Title>
      </div>
      <Price className={styles[`product-price`]}>
        <CurrencyFormat
          thousandSeparator={true}
          value={data.price}
          displayType={'text'}
        />
      </Price>
    </div>
  )
}
