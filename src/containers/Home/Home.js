import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux' 
import  localStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Category from '../../components/Category/Category'
import Ad from './subpages/Ad'
import List from './subpages/List'
import './Home.css'
class Home extends React.Component {
  componentDidMount () {
    // 每次刷新页面，从localStorage中取数据
    let cityName = localStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
  }
  render () {
    return (
      <div className='home-wrapper'>
        <HomeHeader cityName={this.props.userinfo.cityName} search={this.search.bind(this)}></HomeHeader>
        <Category></Category>
        <Ad></Ad>
        <List cityName={this.props.userinfo.cityName}></List>
      </div>
    )
  }
  search (value) {
    // 只有最外层的组件可以使用这种方式来跳转路由
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
}
// -------------------redux react 绑定--------------------


// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)