import { AnyAction } from 'redux';
import { SET_THEME, SET_PAGE_TITLE } from "../actions/actionTypes.ts";

const initialState = {
    theme: 'light',
    title: 'Spaceso'
};

export default function uiReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case SET_THEME:
            return { ...state, theme: action.payload };
        case SET_PAGE_TITLE:
            return { ...state, title: action.payload };
        default:
            return state;
    }
}