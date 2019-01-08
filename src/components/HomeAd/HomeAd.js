import React from 'react'
import './HomeAd.css'
class HomeAd extends React.Component {
  render() {
    const adItems = (this.props.homeAd || []).map(function(item, index) {
    return (<li className='fl ad-item' key={index}>
        <img className='ad-item-img' src={item.img} alt='ad'/>
    </li>)}
    )
    return (
      <div className='homead'>
        <div className='homead-title'>
          <h3 className='title-content'>超值特惠</h3>
        </div>
        <ul className='ad-list clearfix'>
          {adItems}
        </ul>
      </div>
    )
  }
}

export default HomeAd

