import React from 'react'
import HomeAd from '../../../components/HomeAd/HomeAd'
import {homeAd} from '../../../common/js/apiInterface'

class Ad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adArr: []
    }
  }
  componentDidMount () {
    homeAd().then(response => {
      var res = response.data
      if(res.status === '200') {
        this.setState({adArr: res.result})
      }
    })
  }
  render() {
    return (
        this.state.adArr.length?
        <HomeAd homeAd={this.state.adArr}></HomeAd>:
        <div>{/* 加载中... */}</div>
    )
  }
}
export default Ad