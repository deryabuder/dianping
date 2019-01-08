import React from 'react'
import './LikeList.css'
import LikeItem from './subs/LikeItem'

class LikeList extends React.Component {
  render () {

    return (
      <div className='like-list-wrapper'>
        <div className='like-list-title'><h3 className='title-content'>猜你喜欢</h3></div>
        <LikeItem likeList={this.props.likeList}></LikeItem>
      </div>
    )
  }
}

export default LikeList