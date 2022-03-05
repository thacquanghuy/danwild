import React, { useContext } from 'react'
import styles from './product_detail.module.scss'
import { ProductContext } from '../../context/product'
import { CartContext } from '../../context/cart'
import CurrencyFormat from 'react-currency-format'
import { Button } from '../common'
import { Title } from '../common/Text'
import { ADD_ITEM_TO_CART, OPEN_CART } from '../../context/cartActionType'
import { ContentContainer } from '../common/layout'
export default function ProductDetail(props) {
  const { id, type = 'candle' } = props
  const [state, dispatch] = useContext(ProductContext)
  const [cartState, dispatchCart] = useContext(CartContext)

  const data = state[type].find((p) => p?.id == id)
  const addToCart = () => {
    dispatchCart({
      type: ADD_ITEM_TO_CART,
      payload: { item: data },
    })
    dispatchCart({ type: OPEN_CART })
  }
  return (
    <ContentContainer>
      <div className="grid-flow-col md:grid md:grid-flow-row md:grid-cols-12 md:gap-20">
        <div className="col-span-4 mb-5 md:mb-0">
          <div className={`${styles[`image-container`]}`}>
            <img src={data?.image} />
          </div>
        </div>
        <div className="col-span-8">
          <Title className="text-center text-4xl md:text-left">
            {data?.name}
          </Title>
          <p className="mt-2 text-center text-2xl md:text-left">
            <CurrencyFormat
              thousandSeparator={true}
              value={data?.price}
              displayType={'text'}
            />
          </p>

          {data?.description && (
            <div className="mt-8">
              <Title className="mt-3 text-center text-2xl md:text-left">
                Description
              </Title>
              <p className="mt-2 text-center md:text-left">
                {data?.description}
              </p>
            </div>
          )}
          <Button
            onClick={addToCart}
            className="mt-3 w-full md:w-2/5"
            text="Add to cart"
          />
        </div>
      </div>
    </ContentContainer>
  )
}
