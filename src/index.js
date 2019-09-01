import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import todoReducer from './store/reducers/todoReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(todoReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
