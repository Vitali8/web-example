import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as configureStore from './store';

import MainLayout from './containers/Main';

import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore.STORE;

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path="/" component={MainLayout}/>
          <Route path="/template" component={MainLayout}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
