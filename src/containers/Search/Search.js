import React from 'react'
import SearchHeader from '../../components/SearchHeader/SearchHeader' 
import SearchList from './subpage/SearchList'
class Search extends React.Component {
  render () {
    return (
      <div>
        <SearchHeader></SearchHeader>
        <SearchList></SearchList>    
      </div>
    )
  }
}

export default Search