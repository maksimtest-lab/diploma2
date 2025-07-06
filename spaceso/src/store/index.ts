import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducers';
import articlesReducer from './reducers/articlesReducer';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware: (options?: { serializableCheck?: boolean }) => any) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;

export default store;