import React, { useContext } from 'react'
import { ProductContext } from '../../context/product'
import { Product } from '../common'
import { Title } from '../common/Text'

export default function OilPage(props) {
  const [state, dispatch] = useContext(ProductContext)
  const candleProducts = state.oil
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="w-full"
      />
      <Title className="mt-8 text-center text-3xl md:mt-20 md:text-4xl">
        Sản phẩm tinh dầu
      </Title>
      <section className={`mt-8 md:mt-20`}>
        <div className="gap-4 overflow-x-auto whitespace-nowrap px-4 md:grid md:grid-cols-3 md:gap-8 md:px-48 ">
          {candleProducts.map((p, idx) => (
            <Product
              data={{
                ...p,
              }}
              key={p.id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
