import React, { useContext } from 'react'
import { CartContext } from '../../../context/cart'
import styles from './cart.module.scss'
import {
  CLOSE_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from '../../../context/cartActionType'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import CurrencyFormat from 'react-currency-format'
import { Button } from '../index'

export default function Cart(props) {
  const [state, dispatch] = useContext(CartContext)
  const { shown } = state
  const onClose = () => {
    dispatch({
      type: CLOSE_CART,
    })
  }
  console.log(state)

  const onAdd = (data) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        item: data,
      },
    })
  }

  const onRemove = (id) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        id,
      },
    })
  }

  const total = state.items.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity)
  }, 0)
  return (
    <div
      className={`w-4/5 p-7 ${styles['cart-container']} ${
        shown && styles[`cart-container--shown`]
      }`}
    >
      <div className={styles[`content-container`]}>
        <div className="flex  justify-between">
          <h2 className="text-3xl">Giỏ hàng</h2>
          <AiOutlineClose
            onClick={onClose}
            style={{ cursor: 'pointer' }}
            size={25}
          />
        </div>
        {state.items.length === 0 ? (
          <p className="mt-24 text-center italic">
            Giỏ hàng trống. Hãy lựa chọn thêm
          </p>
        ) : (
          <>
            {state.items.map((i) => (
              <div key={i.id} className="mt-5 grid grid-cols-3 gap-4">
                <img className="col-span-1" src={i.image} />
                <div className="col-span-2">
                  <p>{i.name}</p>
                  <div className="mt-3 grid grid-cols-2 items-center gap-5">
                    <div className="col-span-1 flex items-center justify-between">
                      <AiOutlineMinus
                        onClick={() => onRemove(i.id)}
                        style={{ cursor: 'pointer' }}
                      />
                      <p className="text-xl">{i.quantity}</p>
                      <AiOutlinePlus
                        onClick={() => onAdd(i)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                    <p className="col-span-1 text-right">
                      <CurrencyFormat
                        thousandSeparator={true}
                        value={i.price}
                        displayType={'text'}
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {total > 0 && (
          <>
            <div className="mt-5 flex justify-between">
              <p style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                Tổng:
              </p>
              <p>
                <CurrencyFormat
                  thousandSeparator={true}
                  value={total}
                  displayType={'text'}
                  renderText={(text) => (
                    <span className="font-bold">{text}</span>
                  )}
                />
              </p>
            </div>
            <div className="mt-5">
              <Button className="w-full" text="Thanh toán" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
