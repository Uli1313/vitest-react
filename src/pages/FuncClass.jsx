import { useState, useEffect } from 'react'
import ClassComponent from '../components/ClassComponent'
import FunctionComponent from '../components/FunctionComponent'

function FuncClass() {
  const [message, setMessage] = useState('初始的 message')

  return (
    <div>
      <p>message: {message}</p>
      <button onClick={() => setMessage('更新後的 message')}>更新 props</button>
      <ClassComponent message={message} />
      <FunctionComponent message={message} />
    </div>
  )
}

export default FuncClass
