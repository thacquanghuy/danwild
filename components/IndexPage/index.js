import React, { useEffect, useRef, useContext } from 'react'
import styles from './index_page.module.scss'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Product, BackgroundHero } from '../common'
import { ProductContext } from '../../context/product'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function IndexPage(props) {
  const makingPics = [1, 2, 3]
  const places = [1, 2, 3]

  const [state] = useContext(ProductContext)
  const router = useRouter()
  const candleProducts = state.candle
  const oilProducts = state.oil
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: 'ease',
  }
  const slideImages = [
    'https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ]

  const ref = useRef(null)

  return (
    <div className={styles['page-container']}>
      <section>
        <h1 className={`${styles[`header`]} mb-10`}>Sản phẩm của chúng tôi</h1>
        {/* <div className="gap-4 overflow-x-auto whitespace-nowrap px-4 md:grid md:grid-cols-3 md:gap-8 md:px-48 "> */}
        <div className={styles[`prod-container`]}>
          {candleProducts.map((p, idx) => (
            <div className={styles[`prod`]}>
              <Product
                type="candle"
                data={{
                  ...p,
                }}
                key={p.id}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className={`${styles[`header`]} mb-10 mt-12`}>
          Được tạo ra từ những hạt gạo tinh túy nhất
        </h1>
        <div className={styles[`making-container`]}>
          {makingPics.map((id) => (
            <div className={styles[`image-container`]}>
              <Image
                key={id}
                // width={500}
                // height={300}
                src={`/making-${id}.jpg`}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className={`${styles[`header`]} mb-10 mt-12`}>
          Kiểm chứng bởi những khách hàng thân thiết
        </h1>
        <div className={styles[`place-container`]}>
          {places.map((id) => (
            <div className={styles[`image-container`]}>
              <Image
                key={id}
                // width={500}
                // height={300}
                src={`/place-${id}.jpg`}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
