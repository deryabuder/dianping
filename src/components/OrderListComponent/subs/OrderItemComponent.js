import React from 'react'
import Star from '../../../components/Star/Star'
import './OrderItemComponent.css'
class OrderItemComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      commentState: 2,
      stars: {}
    }
  }
  componentDidMount () {
    this.setState({commentState: this.props.data.commentState})
  }
  showComment () {
    this.setState({commentState: 1})
  }
  submitComment () {
    // 获取操作函数
    let submitComment = this.props.submitComment
    // 获取评价项目的id
    let id = this.props.data.id
    // 获取文本框的值
    let textarea = this.refs.commentText
    let value = textarea.value.trim()
    if (!value) {
      return
    }
    // 获取评分
    let star = this.state.stars[this.props.key] || '0'
    submitComment(id, value, star, this.commentOk.bind(this))
  }
  commentOk () {
    this.setState({commentState: 2})
  }
  hideComment () {
    this.setState({commentState: 0})
  }
  // 子组件会调用父组件的事件处理函数，并传入参数
  starClickCallback (star) {
    let stars = this.state.stars
    let id = this.props.data.id
    stars[id] = star
    this.setState({
      stars: stars
    })
  }
  render() {
    const item = this.props.data
    return (
      <li className='order-item'>
        {
          // 未评价
          this.state.commentState === 0 ?
          <button className='btn comment' onClick={this.showComment.bind(this)}>评价</button> :
          // 正在评价
          this.state.commentState === 1 ? '': 
          // 已评价
          <button className='btn commented'>已评价</button>
        }
        <div className='clearfix order-item-info'>
          <div className='order-item-left fl'><img src={item.img} alt='order item'/></div>
          <div className='order-item-right fr'>
            <div>商户：{item.title}</div>
            <div>数量：{item.count}</div>
            <div>价格：{item.price}</div>
          </div>
        </div>
        {
          this.state.commentState === 1 ?
          <div className='order-list-text'>
            <textarea className="comment-text" ref="commentText"></textarea>
            <div className='star-wrapper'>
              <Star star='0' clickCallback={this.starClickCallback.bind(this)}></Star>
            </div>
            <div className='btn-wrapper'>
              <button onClick={this.submitComment.bind(this)} className='btn'>提交</button>
              <button onClick={this.hideComment.bind(this)} className='btn cancel'>取消</button>
            </div>
          </div> 
          : ''
        }
      </li>
    )
  }
}
export default OrderItemComponent 