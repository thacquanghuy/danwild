import React from 'react'
import styles from './expand.module.scss'
import Collapse from '@kunukn/react-collapse'
import { BsChevronRight } from 'react-icons/bs'

export default function Expand(props) {
  const [expanded, setExpanded] = React.useState(false)
  const {
    renderText = () => {},
    renderContent = () => {},
    borderedBot = false,
  } = props
  return (
    <div
      className={`${styles[`expand-container`]} ${
        borderedBot && styles['expand-container--bordered']
      }`}
    >
      <div className={`${styles['header-container']} py-4`}>
        {renderText()}
        <BsChevronRight
          size={13}
          onClick={() => {
            setExpanded(!expanded)
          }}
          className={`${styles[`expand-icon`]} ${
            expanded && styles[`expand-icon--expanded`]
          }`}
        />
      </div>

      <Collapse isOpen={expanded}>{renderContent()}</Collapse>
    </div>
  )
}
