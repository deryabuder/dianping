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
  render() {
    let reactSwipeEl
    return (
      <div className='category-wrapper'>
        <div className='category'>
          <ReactSwipe className="carousel"
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}>
            <div className="carousel-item">
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
            <div className="carousel-item">
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
            <div className="carousel-item">
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
          <button onClick={() => reactSwipeEl.next()}><i className='icon-circle-left'></i></button>
          <button onClick={() => reactSwipeEl.prev()}><i className='icon-circle-right'></i></button>
          {/* <div className='index-container'>
            <ul>
              <li className={this.state.index === 0 ? 'selected' : ''}></li>
              <li className={this.state.index === 1 ? 'selected' : ''}></li>
              <li className={this.state.index === 2 ? 'selected' : ''}></li>
            </ul>
          </div> */}
        </div>
       </div>
    )
  }
}

export default Category