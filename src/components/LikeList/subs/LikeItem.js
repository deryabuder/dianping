import React from 'react'
import {Link} from 'react-router-dom'
import './LikeItem.css'
class LikeItem extends React.Component {
  render() {
    const likeItems = (this.props.likeList || []).map(function(item, index) {
      return (<li className='like-item' key={item.id}>
        <Link to='/detail' className='like-item-link clearfix'>
          <div className='like-item-left fl'><img className='like-item-img' src={item.img} alt='like item'/></div>
          <div className='like-item-right'>
            <div className='like-item-title clearfix'>
              <div className='like-item-name fl'>{item.title}</div>
              <div className='like-item-position fr'>{item.distance}</div>
            </div>
            <div className='like-item-info'>{item.subTitle}</div>
            <div className='like-item-deal clearfix'>
              <div className='like-item-price fl'><span className='current-price'>￥{item.price}</span></div>
              <div className='like-item-counter fr'>已售{item.mumber}</div>
            </div>
          </div>
        </Link>
      </li>) }
      )
    return (
      <ul className='like-list'>
      {likeItems}
    </ul>
    )
  }
}
export default LikeItem