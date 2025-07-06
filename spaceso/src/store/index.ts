import { combineReducers } from 'redux';
import { createStore } from 'redux';
// import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducers';
// import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
//   user: userReducer,
//   todos: todosReducer,
  ui: uiReducer,
//   auth: authReducer
});

const store = createStore(
  rootReducer
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;