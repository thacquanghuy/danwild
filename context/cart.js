import React, { createContext, useContext, useReducer } from 'react'
import { ADD_ITEM_TO_CART, OPEN_CART, CLOSE_CART } from './cartActionType'

export const CartContext = createContext()

const initState = {
  shown: false,
  items: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const {
        payload: { item },
      } = action
      const found = state.items.find((i) => i.id == item.id)
      return {
        ...state,
        items: found
          ? state.items.map((i) => {
              if (i.id == item.id) {
                i.quantity++
              }
              return i
            })
          : [...state.items, { ...item, quantity: 1 }],
      }

    case OPEN_CART:
      return {
        ...state,
        shown: true,
      }

    case CLOSE_CART:
      return {
        ...state,
        shown: false,
      }

    default:
      return { ...initState }
  }
}

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  )
}
