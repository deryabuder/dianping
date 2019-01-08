import React from 'react'
import './CommendList.css'
import CommendItem from './subs/CommendItem'
class CommendList extends React.Component {
  render () {
    return (
      <div>
        <div className='commend-list'>
          <div className='commend-list-title clearfix'><h3 className='left-title fl'>网友点评(288条)</h3><span className='right-title fr'>查看全部》</span></div>
          <CommendItem detailComment={this.props.detailComment}></CommendItem>
        </div> 
        <div className='info'>
          <h3 className='info-title'>商户信息</h3>
          <div className='info-content' dangerouslySetInnerHTML={{__html:this.props.detailInfo.desc}}></div>
          <div className='info-content'>{this.props.detailInfo.desc}></div>
        </div>
       </div>  
      )
  }
}
export default CommendList