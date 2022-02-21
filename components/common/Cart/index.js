import React, { useContext } from 'react'
import { CartContext } from '../../../context/cart'
import styles from './cart.module.scss'
import { CLOSE_CART } from '../../../context/cartActionType'
import { AiOutlineClose } from 'react-icons/ai'

export default function Cart(props) {
  const [state, dispatch] = useContext(CartContext)
  const { shown } = state
  const onClose = () => {
    dispatch({
      type: CLOSE_CART,
    })
  }
  return (
    <div
      className={`w-4/5 p-7 ${styles['cart-container']} ${
        shown && styles[`cart-container--shown`]
      }`}
    >
      <div className="flex  justify-between">
        <h2>Cart</h2>
        <AiOutlineClose
          onClick={onClose}
          style={{ cursor: 'pointer' }}
          size={25}
        />
      </div>
    </div>
  )
}
