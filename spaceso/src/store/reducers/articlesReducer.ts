import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/actionTypes';
import type { ArticlesState } from '../../types/';

const initialState: ArticlesState = {
  items: [],
  error: null,
  loading: false
};

export default function articlesReducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        loading: true
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}