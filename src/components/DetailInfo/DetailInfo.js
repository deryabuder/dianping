import React from 'react'
import './DetailInfo.css'
import Star from '../Star/Star'
class DetailInfo extends React.Component {
  render () {
    return (
      <div className='detail-info'>
        <div className='detail-info-content clearfix'>
          <div className='detail-info-left fl'><img className='detail-info-img' src={this.props.detailInfo.img} alt='hotpot'/></div>
          <div className='detail-info-right fl'>
            <h3>{this.props.detailInfo.title}</h3>        
            <div><Star star={4}/><span>288条</span><span>￥{this.props.detailInfo.price}/人</span></div>
            <div><span>双井</span><span>{this.props.detailInfo.subTitle}</span></div>
            <div>口味：9.0 环境：8.7 服务：8.0</div>
          </div>
        </div>
        <div className='detail-des clearfix'>
          <div className='detail-des-left fl'>
            <i className='icon-map-marker'></i>&nbsp;
            双井并街与南街交汇处
          </div>
          <div className='detail-des-right fr'><i className='icon-angle-right'></i></div>
        </div>
        <div className='detail-des clearfix'>
          <div className='detail-des-left fl'>
            <i className='icon-phone'></i>&nbsp;
            40012123434
          </div>
          <div className='detail-des-right fr'><i className='icon-angle-right'></i></div>
        </div>
      </div>
    )
  }
}
export default DetailInfo