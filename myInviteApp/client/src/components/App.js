import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import InvitePage from './InvitePage'
import UserGoing from './UserGoing'
import UserNotGoing from './UserNotGoing'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default () => <div>
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={InvitePage} />
      <Route path="/UserGoing" exact component={UserGoing} />
      <Route path="/UserNotGoing" exact component={UserNotGoing} />
    </Router>
  </Provider>
</div>
