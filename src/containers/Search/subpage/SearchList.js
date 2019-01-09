import React from 'react'
import LikeList from '../../../components/LikeList/LikeList'
import LoadMore from '../../../components/LoadMore/LoadMore'
import {searchList} from '../../../common/js/apiInterface'
class SearchList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchList: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }
  componentWillMount () {
    this.loadFirstPageData()
  }
  loadFirstPageData () {
    searchList({page: this.state.page}).then(response => {
      let res = response.data
      if(res.status === '200') {
        this.setState(
          {
            hasMore: res.result.hasMore,
            searchList: res.result.data
          })
      }
    })
  }
  loadMoreData () {
    this.setState({isLoadingMore: true})
    searchList({page: this.state.page}).then(response => {
      let res = response.data
      if(res.status === '200') {
        this.setState(
          {
            hasMore: res.result.hasMore,
            searchList: [...this.state.searchList, ...res.result.data]
          })
      }
    })
    this.setState({
      page: this.state.page + 1,
      isLoadingMore: false
    })
  }
  render () {
    return (
      <div>  
        {
          this.state.searchList.length?
          <LikeList likeList={this.state.searchList}></LikeList>:
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

export default SearchList 