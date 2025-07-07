import { AnyAction } from 'redux';
import { LOGIN, LOGOUT, REGISTRATION, GET_AUTH_STATE } from '../actions/actionTypes';
import { AuthState } from '../types/authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

export default function authReducer(state: AuthState = initialState, action: AnyAction): AuthState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                error: action.payload.error
            };
        case REGISTRATION:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                error: action.payload.error
            };

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null
            };

        case GET_AUTH_STATE:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                error: action.payload.error
            };

        default:
            return state;
    }
}