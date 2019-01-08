import React from 'react'
import './LoginComponent.css'
class LoginComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleChange (e) {
    this.setState({
      username: e.target.value
  })
  }
  clickHandle() {
    const username = this.state.username
    const loginHandle = this.props.loginHandle
    loginHandle(username);
}
  render () {
    return (
      <div className='login-form'>
        <div className='login-input-wrapper'>
          <i>name:</i>
          <input 
            className='login-input' 
            type='text' 
            vlue={this.state.username}
            onChange={this.handleChange.bind(this)}
            placeholder='请输入手机号'/>
        </div>
        <div className='login-input-wrapper'>
          <i>pwd:</i>
          <input type='text' className='login-input login-pwd' placeholder='输入验证码'/>
          <span className='pwd-button fr'>发送验证码</span>
        </div>
        <input className='login-button' type='button' value='登录' onClick={this.clickHandle.bind(this)}/>
      </div>
    )
  }
}

export default LoginComponent