import React, { useState, useEffect } from 'react'

const FunctionComponent = ({ message }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('FunctionComponent 非同步事件中的 props:', message)
    }, 3000)
  }, [])

  return <p>FunctionComponent prop: {message}</p>
}

export default FunctionComponent
