import React, { createContext, useContext, useReducer } from 'react'

export const ProductContext = createContext()

const initState = {
  candle: [
    {
      id: 1,
      name: 'Rượu nếp ',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
  ],
  oil: [
    {
      id: 7,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
    {
      id: 8,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
    ,
    {
      id: 9,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
    ,
    {
      id: 10,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
    {
      id: 11,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
    {
      id: 12,
      name: 'This is a name',
      price: 400000,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638124727-best-soy-wax-candles-white-lavender-1638124713.jpg',
      description: 'Elit aliqua labore commodo esse pariatur nulla amet do',
    },
  ],
}

const reducer = (state, action) => {}

export const ProductContextProdiver = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  )
}
