import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
