import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocket';
import missionsReducer from './missions/missions';

const reducer = combineReducers({

  rockets: rocketsReducer,
  missions: missionsReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
