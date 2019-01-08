import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Home from '../containers/Home/Home'
import City from '../containers/City/City'
import Detail from '../containers/Detail/Detail'
import Search from '../containers/Search/Search'
import User from '../containers/User/User'
import NotFound from '../containers/NotFound/NotFound'
import Login from '../containers/Login/Login'
const history = createHistory()
class RouterMap extends React.Component {
  updateHandle () {
    console.log('每次router变化都会触发')
  }
  render () {
    return (
      <BrowserRouter history={history} onUpdate={this.updateHandle.bind(this)}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/login' component={Login}/>
          <Route path='/search' component={Search}/>
          <Route path='/user' component={User}/>
          <Route path='/detail' component={Detail}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )}
}

export default RouterMap