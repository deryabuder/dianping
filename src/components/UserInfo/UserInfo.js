import React from 'react'
import './UserInfo.css'
class UserInfo extends React.Component {
  render() {
    return (
      <div className='userinfo-wrapper'>
        <div>
          <i className="icon-user"></i>&nbsp;
          <span>{this.props.username}</span>
        </div>
        <div>
          <i className="icon-map-marker"></i>&nbsp;
          <span>{this.props.usercity}</span>
        </div>
      </div>
    )
  }
}

export default UserInfo