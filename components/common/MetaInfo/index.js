import React from 'react'
import styles from './meta-info.module.scss'
import { Title, Text } from '../Text'

export default function MetaInfo(props) {
  return (
    <div className="mt-16 grid grid-flow-row-dense grid-cols-4 gap-4 px-4 md:mt-32 md:gap-12 md:px-48">
      <div className="flex flex-col">
        <div className="mb-3">
          <Title>Customer service</Title>
        </div>
        <div className="grid-flow-rows grid gap-1">
          <Text>How to buy</Text>
          <Text>How to buy</Text>
          <Text>How to buy</Text>
          <Text>How to buy</Text>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-3">
          <Title>Customer service</Title>
        </div>
        <div className="grid-flow-rows grid gap-1">
          <Text>How to buy</Text>
          <Text>How to buy</Text>
          <Text>How to buy</Text>
          <Text>How to buy</Text>
        </div>
      </div>
      <div className="col-span-2">a</div>
    </div>
  )
}
