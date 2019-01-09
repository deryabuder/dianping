import React from 'react'
import './BuyAndStore.css'
class BuyAndStore extends React.Component {
  buyClickHandle () {
    this.props.buyHandle()
  }
  storeClickHandle () {
    this.props.storeHandle()
  }
  render () {
    return (
      <div className='buy-store-container clearfix'>
        <div className='buy-container fl'>
          <button className='btn' onClick={this.buyClickHandle.bind(this)}>购买</button>
        </div>
        <div className='store-container fl'>
          { this.props.isStore ?
            <button className='btn selected' onClick={this.storeClickHandle.bind(this)}>已收藏</button>:
            <button className='btn' onClick={this.storeClickHandle.bind(this)}>收藏</button>
          }
        </div>
      </div>
    )
  }
}

export default BuyAndStore