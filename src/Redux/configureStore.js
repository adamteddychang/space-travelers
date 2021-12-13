import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocket';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
