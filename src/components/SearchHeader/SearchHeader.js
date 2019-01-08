import React from 'react'
import createHistory from 'history/createBrowserHistory'
import SearchInput from '../SearchInput/SearchInput'
import './SearchHeader.css'
const history = createHistory()

class SearchHeader extends React.Component {
  render () {
    return (
      <div className='search-header clearfix'>
        <span className='fl search-header-left' onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className='search-header-center fl'>
          <i className="icon-search"></i>&nbsp;
          <SearchInput searchHandle={this.searchHandle.bind(this)}></SearchInput>
        </div>
      </div>
    )
  }
  clickHandle() {
    window.history.back()
  }
  searchHandle(value) {
    history.push('/search/all/' + encodeURIComponent(value))
  }
}

export default SearchHeader