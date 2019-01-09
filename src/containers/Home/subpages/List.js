import React from 'react'
import LikeList from '../../../components/LikeList/LikeList'
import {likeList} from '../../../common/js/apiInterface'
import LoadMore from '../../../components/LoadMore/LoadMore'
import './List.css'
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likeArr: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }
  componentDidMount () {
    this.LoadFirstPageData()
  }
  LoadFirstPageData () {
    likeList({cityName: this.props.cityName, page: 0}).then(response => {
      var res = response.data
      if(res.status === '200') {
        this.setState({
          hasMore: res.result.hasMore,
          likeArr: res.result.data
        })
      }
    })
  }
  loadMoreData () {
    this.setState ({
      isLoadingMore: true
    })
    let cityName = this.props.cityName
    let page = this.props.page +1
    likeList({cityName: cityName, page: page}).then(response => {
      var res = response.data
      if(res.status === '200') {
        this.setState({
          hasMore: res.result.hasMore,
          likeArr: [...this.state.likeArr, ...res.result.data]  
        })
      }
    })
    this.setState({
      page: page,
      isLoadingMore: false
    })
  }
  render() {
    return (
      <div>
        <h3 className='like-list-title'>猜你喜欢</h3>
        {
          this.state.likeArr.length?
          <LikeList likeList={this.state.likeArr}></LikeList>:
          <div>{/* 加载中... */}</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }
}
export default List