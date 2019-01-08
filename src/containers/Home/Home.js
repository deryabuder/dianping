import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux' 
import  localStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Category from '../../components/Category/Category'
import HomeAd from '../../components//HomeAd/HomeAd'
import LikeList from '../../components//LikeList/LikeList'
import './Home.css'
import {homeAd, likeList} from '../../common/js/apiInterface'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adArr: [],
      likeArr: []
    }
  }
  componentDidMount () {
    // 每次刷新页面，从localStorage中取数据
    let cityName = localStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
    homeAd().then(response => {
      var res = response.data
      if(res.status === '200') {
        this.setState({adArr: res.result})
      }
    })
    likeList().then(response => {
      var res = response.data
      if(res.status === '200') {
        this.setState({likeArr: res.result.data})
      }
    })
  }
  render () {
    return (
      <div className='home-wrapper'>
        <HomeHeader cityName={this.props.userinfo.cityName} search={this.search.bind(this)}></HomeHeader>
        <Category></Category>
        <HomeAd homeAd={this.state.adArr}></HomeAd>
        <LikeList likeList={this.state.likeArr}></LikeList>
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