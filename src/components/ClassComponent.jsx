import React from 'react'
class ClassComponent extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('ClassComponent 非同步事件中的 props:', this.props.message)
    }, 3000)

    // 1. 將資料存在變數中
    // const { message } = this.props
    // setTimeout(() => {
    //   console.log('ClassComponent 非同步事件中的 props:', message)
    // }, 3000)

    // 2. 使用 pure function
    // this.showLogWithTimer(this.props.message)
  }

  // showLogWithTimer = (message) => {
  //   setTimeout(() => {
  //     console.log('ClassComponent 非同步事件中的 props:', message)
  //   }, 3000)
  // }

  render() {
    return <p>ClassComponent props: {this.props.message}</p>
  }
}

export default ClassComponent
