import React, { createContext, useContext, useReducer } from 'react'
import {
  ADD_ITEM_TO_CART,
  OPEN_CART,
  CLOSE_CART,
  REMOVE_ITEM_FROM_CART,
} from './cartActionType'

export const CartContext = createContext()

const initState = {
  shown: false,
  items: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
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
    }
    case REMOVE_ITEM_FROM_CART: {
      const {
        payload: { id },
      } = action
      const found = state.items.find((i) => i.id == id)
      if (found.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.id != id),
        }
      } else {
        return {
          ...state,
          items: state.items.map((i) => {
            if (i.id == id) {
              return { ...i, quantity: i.quantity - 1 }
            } else {
              return i
            }
          }),
        }
      }
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
