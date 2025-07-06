import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
        isAuthenticated: false,
        user: null,
};

const validCredentials = {
    username: 'admin',
    password: '123456',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            const {username, password} = action.payload;
            if (username === validCredentials.username && password === validCredentials.password) {
                return { ...state, isAuthenticated: true, user: { username } };
            }
            return state;0
        case LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
}