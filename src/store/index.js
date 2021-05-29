import { applyMiddleware, createStore } from 'redux';
import thunk from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducers';

const devToolsEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, devToolsEnhancer);

export default store;
