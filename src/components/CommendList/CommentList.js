import React from 'react'
import './CommentList.css'
import CommentItem from './subs/CommentItem'

class CommentList extends React.Component {
  render () {
    return (
      <div>
        <div className='comment-list'>
          <div className='comment-list-title clearfix'><h3 className='left-title fl'>网友点评(288条)</h3><span className='right-title fr'>查看全部&nbsp;<i className='icon-angle-right'></i></span></div>
          <CommentItem detailComment={this.props.detailComment}></CommentItem>
        </div> 
      </div> 
      )
  }
}

export default CommentList