import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
class Header extends React.Component {
  render() {
    return (
    <div className='header'>
      <Link to='/' className='back-icon'>
          <i className="icon-chevron-left"></i>
      </Link>
        <span>{this.props.title}</span>
    </div>
    )
  }
}

export default Header