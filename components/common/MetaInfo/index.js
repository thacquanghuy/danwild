import React from 'react'
import styles from './meta-info.module.scss'
import { Title, Text } from '../Text'
import GoogleMapReact from 'google-map-react'
import { Expand } from '../index'
export default function MetaInfo(props) {
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }
  return (
    <div className="a mt-10 grid-flow-row-dense grid-cols-4 gap-4 px-4 md:mt-20 md:grid md:gap-12 md:px-48">
      {isMobile ? (
        <>
          <Expand
            borderedBot={true}
            renderText={() => {
              return <Title>Customer service</Title>
            }}
            renderContent={() => {
              return (
                <>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                </>
              )
            }}
          />
          <Expand
            renderText={() => {
              return <Title>Customer service</Title>
            }}
            renderContent={() => {
              return (
                <>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                  <Text>How to buy</Text>
                </>
              )
            }}
          />
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="mb-3">
              <Title>Customer service</Title>
            </div>
            <div
              className={`${
                styles[`info-mobile`]
              } grid-flow-rows grid gap-1 overflow-hidden `}
            >
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
            <div className="grid-flow-rows overflow-hiddenl grid gap-1">
              <Text>How to buy</Text>
              <Text>How to buy</Text>
              <Text>How to buy</Text>
              <Text>How to buy</Text>
            </div>
          </div>
        </>
      )}

      <div className="col-span-2 mt-4" style={{ height: '200px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAPQoNeWrSYOaJsYuuffPT7ubIa9TJmdrw' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  )
}
