import React from 'react'
import './SearchInput.css'

class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  // state和props的变化，会自动重新渲染
  render () {
    return (
      <input
        type='text'
        className='search-input'
        placeholder='请输入搜索内容'
        onChange={this.handleChange.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
        value={this.state.value}
      />
    )
  }
  // 当input的value变化时，更新state
  handleChange (e) {
    this.setState({value: e.target.value || ''})
  }
  handleKeyUp (e) {
    if (e.keyCode !== 13) {
      return
    }
    // 触发父组件上的handle事件
    this.props.searchHandle(e.target.value)
  }
}

export default SearchInput