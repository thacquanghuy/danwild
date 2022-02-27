import React, { useContext } from 'react'
import styles from './navbar.module.scss'
import Image from 'next/image'
import { AiOutlineShopping } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavbarMobile from './navbar-mobile'
import { CartContext } from '../../../context/cart'
import { OPEN_CART } from '../../../context/cartActionType'
import { Title } from '../Text'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(props) {
  const [y, setY] = React.useState(null)
  const [isWhite, setisWhite] = React.useState(false)
  const [mobileHidden, setHidden] = React.useState(true)
  const [state, dispatch] = useContext(CartContext)
  const { navbarWhite = false } = props
  const router = useRouter()
  const scrollListener = (e) => {
    if (window.scrollY > 300) {
      setisWhite(true)
    } else {
      setisWhite(false)
    }
  }

  const pathname = router?.pathname

  const active = state.items.length > 0

  const links = [
    { name: 'Nến thơm', path: '/candle' },
    { name: 'Tinh dầu', path: '/oil' },
    { name: 'Thông tin', path: '/about' },
    { name: 'Shopping', path: '/all' },
  ]

  const onOpenCart = () => {
    dispatch({
      type: OPEN_CART,
    })
  }

  const isActive = (name) => {
    return pathname.startsWith(name)
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
        isWhite || navbarWhite
          ? `${styles['nav-bar']} ${styles['nav-bar--white']}`
          : styles['nav-bar']
      } px- flex w-full flex-row py-4 px-4 md:py-6 md:px-48`}
    >
      <div className="flex basis-1/5 cursor-pointer items-center justify-items-start">
        <Image
          onClick={() => {
            router.push('/')
          }}
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
          {links.map((l) => (
            <li
              key={l.name}
              className={`${styles['nav-item']} ${
                isActive(l.path) && styles[`nav-item--active`]
              }`}
            >
              <Title>
                <Link href={l.path}>{l.name}</Link>
              </Title>
            </li>
          ))}
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
        <div
          onClick={onOpenCart}
          style={{ cursor: 'pointer' }}
          className={`${styles[`cart-container`]}`}
        >
          <AiOutlineShopping size={25} />
          <span
            className={
              active
                ? `${styles[`red-icon`]} ${styles[`red-icon--active`]}`
                : styles[`red-icon`]
            }
          />
        </div>
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
