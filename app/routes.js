import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FastClick from 'fastclick'

import App from './containers/App'

window.addEventListener('load', () => {
  FastClick.attach(document.body);
})

class Transition extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="page"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        style={{ height: '100%', width: '100%', overflow: 'hidden', top: '0px' }}
      >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}
      </ReactCSSTransitionGroup>
    );
  }
}


// 图表
const welcome = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./pages/welcome').default)
  }, 'welcome')
}

// 登录
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/App/login').default)
  }, 'login')
}

/* 进入路由的判断*/
function isLogin(nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    // replaceState('/login')
    // hashHistory.push('/login')
  }
}

const routes = (
  <Route component={Transition}>
    <Route path="/" component={App} onEnter={isLogin}>
      <IndexRoute component={welcome} />
      <Route path="/welcome" getComponent={welcome} />

    </Route>
    <Route path="/login" getComponent={Login}></Route>
  </Route>
);

export default routes