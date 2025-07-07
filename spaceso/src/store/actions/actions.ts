import { SET_PAGE_TITLE, SET_THEME, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE, SET_BREADCRUMBS, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE, SET_ARTICLE } from './actionTypes';
import { API_ARTICLE_URL, API_ARTICLES_URL } from '../../consts/api';
import axios from 'axios';
import type { Article } from '../../types/articles';
import type { Route } from '../../types/route';

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

export const setBreadcrumbs = (breadcrumbs: Route[]) => {
  return {
    type: SET_BREADCRUMBS,
    payload: breadcrumbs
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

export const fetchArticleSuccess = (article: Article) => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: article
});

export const fetchArticleFailure = (error: string) => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: error
});

export const fetchArticle = (id: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(API_ARTICLE_URL.replace(':id', id));
      dispatch(fetchArticleSuccess(response.data));
    } catch (error) {
      console.error('Error fetching article:', error);
      dispatch(fetchArticleFailure(error instanceof Error ? error.message : 'Unknown error'));
    }
  };
};

export const setArticle = (article: Article | null) => {
  return {
    type: SET_ARTICLE,
    payload: article
  };
};
  