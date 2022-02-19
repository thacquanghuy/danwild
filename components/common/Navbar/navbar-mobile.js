import React from 'react'
import styles from './navbar.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { Title } from '../Text'

export default function NavbarMobile(props) {
  const { hidden, onClose } = props
  return (
    <>
      {!hidden && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 800,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.568)',
          }}
        ></div>
      )}
      <div
        className={`pl-20 ${styles['navbar-mobile']} ${
          hidden && styles['navbar-mobile--hidden']
        } `}
      >
        <div className={styles['overlay']}></div>
        <div className={`h-full w-full p-7 pl-5 ${styles[`content`]} `}>
          <div className="grid justify-items-end">
            <AiOutlineClose
              onClick={() => {
                onClose()
              }}
              size={25}
            />
          </div>
          <div className="grid-flow-rows mt-8 grid gap-5">
            <Title>Go to products</Title>
            <Title>Go to products</Title>
            <Title>Go to products</Title>
            <Title>Go to products</Title>
            <div>
              <BsFacebook size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
