import React from 'react'

class LoadMore extends React.Component {
  componentDidMount() {
    // 使用滚动时自动加载更多
    // 使用滚动时自动加载更多
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId

    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if (top && top < windowHeight) {
        // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', function () {
      // 正在加载
      if (this.props.isLoadingMore) {
        return
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      // 函数防抖，将几次操作合并为一次
      timeoutId = setTimeout(callback, 50)
    }.bind(this), false);
  }
  loadMoreHandle() {
    this.props.loadMoreFn()
  }
  render () {
    return (
      <div className='load-more' ref='wrapper'>
        { this.props.isLoadingMore ?
          <span>加载中...</span>:
          <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore