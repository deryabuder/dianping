import React from 'react'
import './CommentItem.css'
import Star from '../../Star/Star'
class CommentItem extends React.Component {
  render() {
    const commentItems = (this.props.detailComment || []).map(function(item, index) {
      return (
        <li className='comment-item clearfix' key={index}>
          <div className='comment-left fl'><img className='comment-left-img' src={require("../../../static/img/head.png")} alt='head'/></div>
          <div className='comment-right fl'>
            <div className='comment-id'>
              {item.username}
            </div>
            <Star star={item.star}/>
            <div className='comment-content'>
            {item.comment}
            </div>
            <div className='comment-img-wrapper'>
              <img className='comment-right-img' src={require('../../../static/img/food.png')} alt='food'/>
              <img className='comment-right-img' src={require('../../../static/img/food.png')} alt='food'/>
              <img className='comment-right-img' src={require('../../../static/img/food.png')} alt='food'/>
            </div>
          </div>
        </li>)}
        )
    return (
      <ul className='command-list-content'>
        {commentItems}
      </ul>
    )
  }
}

export default CommentItem