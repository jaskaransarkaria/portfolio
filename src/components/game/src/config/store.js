import { createStore, combineReducers } from "redux";
import playerReducer from "../features/player/reducer";
import mapReducer from "../features/map/reducer";
// each react component we create needs to have state needs to have
// it's own "reducer". A reducer is included here in the root reducer
// a reducer is a js object which has keys and values. the values are the
// the storage state

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // allows browser to inspect our redux store as we build the app
);

export default store;
