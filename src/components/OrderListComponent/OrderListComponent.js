import React from 'react'
import OrderItemComponent from './subs/OrderItemComponent'
class OrderListComponent extends React.Component {
  render() {
    const data = this.props.orderList
    return (
      <ul>
        { (data || []).map((item, index) => 
            <OrderItemComponent data={item} key={index}></OrderItemComponent>
        )}
      </ul>
    )
  }
}
export default OrderListComponent