import React from 'react'
import LikeItem from './subs/LikeItem'

class LikeList extends React.Component {
  render () {
    return (
      <ul className='like-list'>
        { (this.props.likeList || []).map((item, index) => 
          <LikeItem item={item} key={index}></LikeItem>
        )}
      </ul>
    )
  }
}

export default LikeList