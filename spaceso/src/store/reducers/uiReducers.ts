import { SET_THEME, SET_PAGE_TITLE } from "../actions/actionTypes.ts";

interface uiAction {
    type: typeof SET_THEME | typeof SET_PAGE_TITLE;
    payload: string;
}

const initialState = {
    theme: 'light',
    title: 'Spaceso'
};

export default function uiReducer(state = initialState, action: uiAction) {
    switch (action.type) {
        case SET_THEME:
            return { ...state, theme: action.payload };
        case SET_PAGE_TITLE:
            return { ...state, title: action.payload };
        default:
            return state;
    }
}