import { SET_PAGE_TITLE, SET_THEME } from './actionTypes';

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