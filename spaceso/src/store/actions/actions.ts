import { SET_PAGE_TITLE, SET_THEME, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from './actionTypes';
import { API_ARTICLES_URL } from '../../consts/api';
import axios from 'axios';
import type { Article } from '../../types/articles';

export const setPageTitle = (title: string) => {
  return {
    type: SET_PAGE_TITLE,
    payload: title
  };
};

export const setTheme = (theme: 'light' | 'dark') => {
  return {
    type: SET_THEME,
    payload: theme
  };
};

export const fetchArticlesSuccess = (articles: Article[]) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
});

export const fetchArticlesFailure = (error: string) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error
});

export const fetchArticles = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(API_ARTICLES_URL);
      dispatch(fetchArticlesSuccess(response.data.results));
    } catch (error) {
      console.error('Error fetching articles:', error);
      dispatch(fetchArticlesFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
  };
};