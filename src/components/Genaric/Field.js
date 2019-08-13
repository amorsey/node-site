import React, { Component } from 'react'

const Field = ({placeholder_text, class_name}) => {
  return (
    <div className={class_name}>
        <input placeholder={placeholder_text} className="field"/>
    </div>
  )
};

export default Field;
