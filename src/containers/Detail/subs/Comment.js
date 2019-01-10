import React from 'react'
import CommentList from '../../../components/CommendList/CommentList'
import LoadMore from '../../../components/LoadMore/LoadMore'
import { detailComment } from '../../../common/js/apiInterface'
class Comment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detailComment: [],
      isLoadingMore: false,
      hasMore: false,
      page: 1

    }
  }
  componentDidMount () {
    this.LoadFirstPageData()
  }
  LoadFirstPageData () {
    detailComment({page: 1}).then(response => {
      var res = response.data
      if (res.status === '200') {
        this.setState({
          hasMore: res.result.hasMore,
          detailComment: res.result.data
        })
      }
    })
  }
  loadMoreData () {
    this.setState({
      isLoadingMore: true
    })
    let page = this.state.page + 1
    detailComment({page: page}).then(response => {
      var res = response.data
      if (res.status === '200') {
        this.setState({
          hasMore: res.result.hasMore,
          detailComment: [...this.state.detailComment, ...res.result.data]
        })
      }
    })
    this.setState({
      isLoadingMore: false,
      page: page
    })
  }
  render () {
    return (
      <div>
      {
        this.state.detailComment.length?
        <CommentList detailComment={this.state.detailComment}></CommentList>:
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
export default Comment