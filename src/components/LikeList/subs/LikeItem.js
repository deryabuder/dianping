import React from 'react'
import {Link} from 'react-router-dom'
import './LikeItem.css'
class LikeItem extends React.Component {
  render() {
      return (<li className='like-item'>
        <Link to={'/detail/' + this.props.item.id} className='like-item-link clearfix'>
          <div className='like-item-left fl'><img className='like-item-img' src={this.props.item.img} alt='like item'/></div>
          <div className='like-item-right'>
            <div className='like-item-title clearfix'>
              <div className='like-item-name fl'>{this.props.item.title}</div>
              <div className='like-item-position fr'>{this.props.item.distance}</div>
            </div>
            <div className='like-item-info'>{this.props.item.subTitle}</div>
            <div className='like-item-deal clearfix'>
              <div className='like-item-price fl'><span className='current-price'>￥{this.props.item.price}</span></div>
              <div className='like-item-counter fr'>已售{this.props.item.mumber}</div>
            </div>
          </div>
        </Link>
      </li>)
  }
}
export default LikeItem