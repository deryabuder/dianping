import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux' 
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LoginComponent from '../../components/LoginComponent/LoginComponent'
import Header from '../../components/Header/Header'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checking: true
    }
  }
  componentDidMount() {
    // 判断是否已经登录
    this.doCheck()
  }

  doCheck() {
    const userinfo = this.props.userinfo
    if (userinfo.username) {
        // 已经登录，则跳转到用户主页
        this.goUserPage();
    } else {
        // 未登录，则验证结束
        this.setState({
            checking: false
        })
    }
  }
  goUserPage () {
    this.props.history.push('/user')
  }

    // 处理登录之后的事情
  loginHandle(username) {
    // 保存用户名
    const actions = this.props.userInfoActions
    let userinfo = this.props.userinfo
    userinfo.username = username
    actions.update(userinfo)
    // 跳转到用户主页
    this.goUserPage()
  }
  
  render () {
    return (
      <div>
        <Header title='登录'></Header>
        { this.state.checking ?
          <div>{/* 等待中 */}</div> :
          <LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>
        }
      </div>
    )
  }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
  return {
      userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)