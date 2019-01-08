import React from 'react'
import './CommendItem.css'
import Star from '../../Star/Star'
class CommendItem extends React.Component {
  render() {
    const commendItems = (this.props.detailComment || []).map(function(item, index) {
      return (
        <li className='commend-item clearfix' key={index}>
          <div className='commend-left fl'><img className='comment-left-img' src={require("../../../static/img/head.png")} alt='head'/></div>
          <div className='commend-right fl'>
            <div className='commend-id'>
              {item.username}
            </div>
            <Star star={item.star}/>
            <div className='commend-content'>
            {item.comment}
            </div>
            <div className='commend-img-wrapper'>
              <img className='commend-right-img' src={require('../../../static/img/food.png')} alt='food'/>
              <img className='commend-right-img' src={require('../../../static/img/food.png')} alt='food'/>
              <img className='commend-right-img' src={require('../../../static/img/food.png')} alt='food'/>
            </div>
          </div>
        </li>)}
        )
    return (
      <ul className='command-list-content'>
        {commendItems}
      </ul>
    )
  }
}

export default CommendItem