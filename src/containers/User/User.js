import React from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header/Header'
import OrderList from './subpages/OrderList'
import UserInfo from '../../components/UserInfo/UserInfo'

class User extends React.Component {
  render () {
    const userinfo = this.props.userinfo
    return (
      <div>
        <Header title='用户主页'></Header>
        <UserInfo username={userinfo.username} usercity={userinfo.cityName}></UserInfo>
        <OrderList username={userinfo.username}></OrderList>
      </div>
    )
  }
  componentDidMount () {
    if(!this.props.userinfo.username) {
      this.props.history.push('/login')
    }
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)