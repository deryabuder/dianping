import React from 'react'
import './Detail.css'
import Header from '../../components/Header/Header'
import CommendList from '../../components/CommendList/CommendList'
import DetailInfo from '../../components//DetailInfo/DetailInfo'
import LikeItem from '../../components/LikeList/subs/LikeItem'
import {detailInfo, detailComment,likeList} from '../../common/js/apiInterface'
class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detailInfo: {},
      detailComment: [],
      likeArr: []
    }
  }
  componentDidMount () {
    detailInfo().then(response => {
      var res = response.data
      if (res.status === '200') {
        this.setState({detailInfo: res.result})
      }
    })
    detailComment().then(response => {
      var res = response.data
      if (res.status === '200') {
        this.setState({detailComment: res.result.data})
      }
    })
    likeList().then(response => {
      var res = response.data
      if (res.status === '200') {
        this.setState({likeArr: res.result.data})
      }
    })
  }
  render() {
    return (
      <div className='detail'>
        <Header title='商户详情'></Header>
        <DetailInfo detailInfo={this.state.detailInfo}></DetailInfo>
        <CommendList detailComment={this.state.detailComment} detailInfo={this.state.detailInfo}></CommendList>
        <div className='like-list-title'><h3 className='title-content'>小伙伴们还喜欢</h3></div>
        <LikeItem likeList={this.state.likeArr}></LikeItem>
      </div>
    )
  }
}
export default Detail