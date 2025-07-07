import { AnyAction } from 'redux';
import { LOGIN, LOGOUT, REGISTRATION } from '../actions/actionTypes';
import { AuthState } from '../types/authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const validCredentials = {  
    username: '123@asdfs.com',
    password: '123456',
}

export default function authReducer(state: AuthState = initialState, action: AnyAction): AuthState {
    let username, password;

    switch (action.type) {
        case LOGIN:
            console.log(action.payload);
            username = action.payload.username;
            password = action.payload.password;
            if (username === validCredentials.username && password === validCredentials.password) {
                return { ...state, isAuthenticated: true, user: { username } };
            }

            return { ...state, error: 'Invalid credentials' };

        case LOGOUT:

            return { ...state, isAuthenticated: false, user: null, error: null };

        case REGISTRATION:
            console.log(action.payload);
            username = action.payload.username;
            password = action.payload.password;
            validCredentials.username = username;
            validCredentials.password = password;

            return { ...state, isAuthenticated: true, user: { username } };

        default:

            return state;
    }
}