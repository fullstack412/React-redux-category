import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react'

import CategoryContainer from './containers/category';
import store, { history } from './store';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Provider store={store}>
          {/* <PersistGate
            persistor={persistor}
          > */}
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' component={CategoryContainer}/>
            </Switch>
          </ConnectedRouter>
          {/* </PersistGate> */}
        </Provider>
      </div>
    );
  }
}

export default App;
