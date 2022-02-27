import React, { useEffect, useRef, useContext } from 'react'
import styles from './index_page.module.scss'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Product, BackgroundHero } from '../common'
import { ProductContext } from '../../context/product'
import { useRouter } from 'next/router'

export default function IndexPage(props) {
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

  useEffect(() => {
    if (FB?.CustomerChat) {
      FB.CustomerChat.show()
    }
    const inter = setInterval(() => {
      ref.current.goNext()
    }, 7000)

    return () => clearInterval(inter)
  }, [])

  return (
    <div className={styles['page-container']}>
      <div className={styles['slide-container']}>
        <Slide ref={ref} {...properties}>
          {slideImages.map((each, index) => (
            <div key={index} className={styles['each-slide']}>
              <img className={styles['lazy']} src={each} alt="sample" />
            </div>
          ))}
        </Slide>
        <div className={styles[`view-button-container`]}>
          <Button text="Xem tất cả" />
        </div>
        <div className={`${styles['buttons']}`}>
          <FontAwesomeIcon
            className={`${styles['arrow']} ${styles['arrow-left']}`}
            color="#fff"
            onClick={() => ref.current.goBack()}
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            className={`${styles['arrow']} ${styles['arrow-right']}`}
            color="#fff"
            onClick={() => ref.current.goNext()}
            icon={faAngleRight}
          />
        </div>
      </div>
      <section className={`${styles[`product-section`]} mt-8 md:mt-20`}>
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
        <div className="mt-10 grid place-content-center">
          <Button
            onClick={() => router.push('/candle')}
            text="Sản phẩm nến thơm"
          />
        </div>
      </section>
      <div className="mt-16">
        <BackgroundHero
          image={
            'https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80'
          }
        />
      </div>
      <section className={`${styles[`product-section`]}  mt-8 md:mt-20`}>
        <div className=" mb-10 grid-cols-4 gap-4 overflow-x-auto whitespace-nowrap px-4 md:grid md:gap-8 md:px-48">
          {oilProducts.map((p, idx) => (
            <Product
              key={p.id}
              data={{
                ...p,
              }}
            />
          ))}
        </div>
        <div className="grid place-content-center">
          <Button
            onClick={() => router.push('/oil')}
            text="Sản phẩm tinh dầu"
          />
        </div>
      </section>
    </div>
  )
}
