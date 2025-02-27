import { useState, useEffect } from 'react'
import ChildComponent from '../components/ChildComponent'

function Lifecycle() {
  console.log('執行父元件 component function')
  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    console.log('執行父元件 effect 函式')

    return () => {
      console.log('執行父元件 cleanup 函式')
    }
  }, [count, isShow])

  return (
    <>
      <h1>Lifecycle</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        setCount
      </button>
      <h2>當前 count: {count}</h2>

      <button
        type="button"
        onClick={() => {
          setIsShow(!isShow)
          console.log('=======')
        }}
      >
        {isShow ? '隱藏子元件' : '顯示子元件'}
      </button>
      {isShow && <ChildComponent />}
    </>
  )
}

export default Lifecycle
