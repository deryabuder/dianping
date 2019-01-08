import React from 'react'
import Header from '../../components/Header/Header.js'
import './City.css'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {CITYNAME} from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component {
  render () {
    return (
      <div className='city'>
        <Header title='选择城市'></Header>
        <div className='current-city'>{this.props.userinfo.cityName}<span className='current-city-info'>GPS定位</span></div>
        <div className='hot-city'>
          <div className='hot-city-title'>热门城市</div>
            <ul className='hot-city-list clearfix'>
              <li className='hot-city-item fl'>
                <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
              </li>
              <li className='hot-city-item fl'>
                <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
              </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li className='hot-city-item fl'>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
            </ul>
        </div>
      </div>
    )
  }
  clickHandle (newCity) {
    if (newCity == null) {
        return
    }
    // 修改 redux
    const userinfo = this.props.userinfo
    userinfo.cityName = newCity
    this.props.userInfoActions.update(userinfo)

    // 修改 localStorage
    localStore.setItem(CITYNAME, newCity)
    // 跳转页面
    this.props.history.push('/')
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
)(City)