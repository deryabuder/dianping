import React from 'react'
import {searchList} from '../../../common/js/apiInterface'
import LikeItem from '../../../components/LikeList/subs/LikeItem'
class SearchList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchList: []
    }
  }
  componentWillMount() {
    searchList().then(response => {
      let res = response.data
      if(res.status === '200') {
        this.setState({searchList: (res.result.data || [])})
      }
    })
  }
  render () {
    return (
      <div>
        <LikeItem likeList={this.state.searchList}></LikeItem>
      </div>
    )
  }
}

export default SearchList 