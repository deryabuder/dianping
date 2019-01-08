import React from 'react'
import './Category.css'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'
class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  render () {
    const opt = {
      auto: 500,
      callback: function(index) {
        // 更新当前轮播图的index
        this.setState({index: index});
    }.bind(this)
  }
    return (
      <div className='category-wrapper'>
        <div className='category'>
          <ReactSwipe
            swipeOptions={opt}
          >
            <div>
              <ul className="category-list clearfix">
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='景点'/></div>
                    <div>景点</div>
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="category-list clearfix">
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='美食'/></div>
                    <div>美食</div>
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className="category-list clearfix">
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
                <Link to='/search/jindian'>
                  <li className='category-item fl'>
                    <div><img className='category-item-img' src={require('../../static/img/icon.png')} alt='旅游'/></div>
                    <div>旅游</div>
                  </li>
                </Link>
              </ul>
            </div>
          </ReactSwipe>
          <div className='index-container'>
            <ul>
              <li className={this.state.index === 0 ? 'selected' : ''}></li>
              <li className={this.state.index === 1 ? 'selected' : ''}></li>
              <li className={this.state.index === 2 ? 'selected' : ''}></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Category