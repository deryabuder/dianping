import React from 'react'
import './DetailDes.css'
class DetailDes extends React.Component {
  render () {
    return (
      <div className='info'>
        <h3 className='info-title'>商户信息</h3>
        <div className='info-content' dangerouslySetInnerHTML={{__html:this.props.detailInfo.desc}}></div>
      </div>
    )
  }
}
export default DetailDes