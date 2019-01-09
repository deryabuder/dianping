import React from 'react'
import OrderItemComponent from './subs/OrderItemComponent'
class OrderListComponent extends React.Component {
  render() {
    const data = this.props.orderList
    let submitComment = this.props.submitComment
    return (
      <ul>
        { (data || []).map((item, index) => 
            <OrderItemComponent data={item} key={index} submitComment={submitComment}></OrderItemComponent>
        )}
      </ul>
    )
  }
}
export default OrderListComponent