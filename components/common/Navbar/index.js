import React from 'react'
import styles from './navbar.module.scss'
import Image from 'next/image'
import { AiOutlineShopping } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavbarMobile from './navbar-mobile'

import { Title } from '../Text'
export default function Header(props) {
  const [y, setY] = React.useState(null)
  const [isWhite, setisWhite] = React.useState(false)
  const [mobileHidden, setHidden] = React.useState(true)

  const scrollListener = (e) => {
    if (window.scrollY > 300) {
      setisWhite(true)
    } else {
      setisWhite(false)
    }
  }

  React.useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', scrollListener)

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener('scroll', scrollListener)
    }
  }, [y])

  return (
    <div
      className={`${
        isWhite
          ? `${styles['nav-bar']} ${styles['nav-bar--white']}`
          : styles['nav-bar']
      } px- flex w-full flex-row py-4 px-4 md:py-6 md:px-48`}
    >
      <div className="flex basis-1/5 items-center justify-items-start">
        <Image
          width="100px"
          height="50px"
          src="https://www.webfx.com/wp-content/uploads/2021/10/webfx-logo.png"
        />
      </div>

      <div
        className={`${styles['main-nav-container']} flex grid basis-3/5 items-center justify-items-center`}
      >
        <ul
          className={`${styles['nav-item-container']} flex hidden w-full flex-row	 justify-between lg:flex`}
        >
          <li className={styles['nav-item']}>
            <Title>Nến thơm</Title>
          </li>
          <li className={styles['nav-item']}>
            <Title>Tinh dầu</Title>
          </li>
          <li className={styles['nav-item']}>
            <Title>Thông tin</Title>
          </li>
          <li className={styles['nav-item']}>
            <Title>Mua hàng</Title>
          </li>
        </ul>
      </div>
      <div className="flex grid basis-1/5 grid-cols-2 items-center justify-items-end">
        <GiHamburgerMenu
          className="block md:hidden"
          onClick={() => {
            setHidden(false)
          }}
          size={25}
        />
        <AiOutlineShopping size={25} />
      </div>
      <NavbarMobile
        onClose={() => {
          setHidden(true)
        }}
        hidden={mobileHidden}
      />
    </div>
  )
}
