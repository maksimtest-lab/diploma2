import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducers';
import articlesReducer from './reducers/articlesReducer';
import articleReducer from './reducers/articleReducer';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    article: articleReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware: (options?: { serializableCheck?: boolean }) => any) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;

export default store;