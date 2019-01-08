import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory'
import RouterMap from './router/routerMap';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './static/css/base.css'
import './static/css/font.css'
const history = createHistory();
// 创建redux的store对象
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <RouterMap history={history}/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
