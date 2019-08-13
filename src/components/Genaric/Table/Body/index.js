import React, { Component } from 'react'
import Row from './Row'

const Body = ({props}) => {
  return (
    <tbody>
      {
        props.bodyData.map((data, i) => (
          <Row
            key={i}
            rowData={data}
            element={props.element}
            imgs={props.imgs ? props.imgs[i] : null}
          />
        ))
      }
    </tbody>
  )
}

export default Body;
