import React, { useContext, useState } from 'react'
import styles from './checkout.module.scss'
import { CartContext } from '../../context/cart'
import { Title, Price } from '../common/Text'
import { useRouter } from 'next/router'
import { Button } from '../common'

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAddress] = useState('')

  const onSubmit = (e) => {}
  return (
    <form onSubmit={onSubmit} className="">
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Họ và tên
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          id="phone"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
          placeholder=" "
          required
        />
        <label
          htmlFor="phone"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Số điện thoại
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={adress}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name="address"
          id="address"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
          placeholder=" "
        />
        <label
          htmlFor="address"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Địa chỉ
        </label>
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Địa chỉ email
        </label>
      </div>

      <Button className="mt-4 w-full" text="Mua hàng" />
    </form>
  )
}

export default function Checkout(props) {
  const router = useRouter()
  const [state, dispatch] = useContext(CartContext)
  const total = state.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)
  return (
    <div className="mt-28 px-4 md:mt-40 md:px-48">
      <Title className="mb-2 text-center text-4xl">Thanh toán</Title>
      <p
        onClick={() => {
          router.push('/')
        }}
        className={`${
          styles[`link`]
        } cursor-pointer text-center italic hover:not-italic`}
      >
        Tiếp tục mua hàng
      </p>

      {state.items.length === 0 ? (
        <p className="mt-14 text-center">
          Bạn chưa có sản phẩm nào trong giỏ hàng
        </p>
      ) : (
        <div className="mt-14 grid gap-10  md:grid-cols-2">
          <div className="md:order-last">
            {state.items.map((it) => (
              <div key={it.id} className="mb-6 flex justify-between">
                <div className="flex">
                  <div className={styles[`product-container`]}>
                    <span className={styles[`quantity`]}>{it.quantity}</span>
                    <img className="w-full" src={it.image} />
                  </div>
                  <p className="ml-4">{it.name}</p>
                </div>
                <div>
                  <Price className="font-bold" text={it.price}></Price>
                </div>
              </div>
            ))}
            <div className="flex justify-between">
              <p>Tổng:</p>
              <Price className="font-bold" text={total} />
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      )}
    </div>
  )
}
