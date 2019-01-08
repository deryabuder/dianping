import React from 'react'
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import './HomeHeader.css'
class HomeHeader extends React.Component {
  render() {
    return (
    <div className='home-header clearfix'>
      <Link to='/city' className='fl'>
        <div className='header-left'>
          {this.props.cityName}&nbsp;
          <i className="icon-angle-down"></i>
        </div>
      </Link>
      <div className='header-center fl'>
        <i className="icon-search"></i>&nbsp;
        <SearchInput searchHandle={this.searchHandle.bind(this)}></SearchInput>
      </div>
      <Link to='/user' className='fr'>
        <div className='header-right'>
          <i className="icon-user"></i>
        </div>
      </Link>
    </div>
    )
  }
  searchHandle(value) {
    this.props.search(value)
  }
}

export default HomeHeader