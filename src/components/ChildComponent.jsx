import { useEffect } from 'react'
function ChildComponent() {
  console.log('執行子元件 component function')

  useEffect(() => {
    console.log('執行子元件 effect 函式')

    return () => {
      console.log('執行子元件 cleanup 函式')
    }
  }, [])

  return (
    <>
      <h1>子元件</h1>
    </>
  )
}

export default ChildComponent
