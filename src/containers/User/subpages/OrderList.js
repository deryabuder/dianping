import React from 'react'
import OderListComponent from '../../../components/OrderListComponent/OrderListComponent'
import { orderList, postComment } from '../../../common/js/apiInterface'
import './OrderList.css'
class OrderList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orderArr: []
    }
  }
  componentDidMount () {
    const  username = this.props.username
    if (username) {
      this.getOrderList()
    }
  }
  getOrderList () {
    orderList().then(response => {
      let res = response.data
      if (res.status === '200') {
        this.setState({orderArr: res.result.data})
      }
    })
  }
  submitComment (id, value, star, callback) {
    postComment({id: id,value: value, star:star}).then(response => {
      let res = response.data
      if(res.status === '200') {
        callback()
      }
    })
  }
  render () {
    return (
      <div className='order-list-wrapper'>
        <h2 className='order-list-title'>您的订单</h2>
        {this.state.orderArr.length ? 
          <OderListComponent orderList={this.state.orderArr} submitComment={this.submitComment.bind(this)}></OderListComponent> :
          <div>{/* 加载中... */}</div>
      }
      </div>
    )
  }
}

export default OrderList 