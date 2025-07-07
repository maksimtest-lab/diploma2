import { AnyAction } from 'redux';
import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState: any = {
        isAuthenticated: false,
        user: null,
};

const validCredentials: any = {  
    username: 'admin',
    password: '123456',
}

export default function authReducer(state: any = initialState, action: AnyAction) {
    switch (action.type) {
        case LOGIN:
            const {username, password} = action.payload;
            if (username === validCredentials.username && password === validCredentials.password) {
                return { ...state, isAuthenticated: true, user: { username } };
            }
            return state;
        case LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}