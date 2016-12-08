/* global DEBUG	*/

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

// Custom
import reducers from './reducers';
import routes from './routes';


const logger = createLogger();
const createPersistentStore = compose(persistState());

let middleware = [ promise, thunk ];

if( DEBUG ) {
	middleware = [...middleware, logger];
}

const createStoreWithMiddleware = applyMiddleware(...middleware);

const createEnhancedStore = compose(
      createStoreWithMiddleware,
      createPersistentStore
    )(createStore);

ReactDOM.render(
	<Provider store={createEnhancedStore(reducers)}>
    <Router history={browserHistory} routes={routes} />
	</Provider>
 , document.querySelector('.container'));
