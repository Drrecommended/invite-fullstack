import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import InvitePage from './InvitePage'
export default () => <div>
  <Provider store={store}>
    <InvitePage />
  </Provider>
</div>
