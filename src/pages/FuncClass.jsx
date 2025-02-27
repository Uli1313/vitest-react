import { useState } from 'react'
import ClassComponent from '../components/ClassComponent'
import FunctionComponent from '../components/FunctionComponent'

function FuncClass() {
  const [message, setMessage] = useState('初始的 message')
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <p>message: {message}</p>
      <button onClick={() => setMessage('更新後的 message')}>更新 props</button>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        {isShow ? '隱藏 FunctionComponent' : '顯示 FunctionComponent'}
      </button>
      <div>
        ClassComponent: <ClassComponent message={message} />
      </div>
      {isShow && (
        <div>
          FunctionComponent: <FunctionComponent message={message} />
        </div>
      )}
    </div>
  )
}

export default FuncClass
