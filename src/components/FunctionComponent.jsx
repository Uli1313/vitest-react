import React, { useEffect } from 'react'

const FunctionComponent = ({ message }) => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('FunctionComponent 非同步事件中的 props:', message)
    }, 3000)

    return () => clearInterval(timerId)
  }, [])

  return <span>{message}</span>
}

export default FunctionComponent
