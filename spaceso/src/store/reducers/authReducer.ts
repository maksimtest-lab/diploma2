import { AnyAction } from 'redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LOGIN, LOGOUT, REGISTRATION } from '../actions/actionTypes';
import { AuthState } from '../types/authTypes';
import { auth } from '../../firebase';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

// Valid credentials for demo purposes (consider removing in production)
const validCredentials = {  
    username: '123@asdfs.com',
    password: '123456',
}

interface Credentials {
    username: string;
    password: string;
}

export default function authReducer(state: AuthState = initialState, action: AnyAction): AuthState | Promise<AuthState> {
    switch (action.type) {
        case LOGIN: {
            const { username, password } = action.payload as Credentials;
            if (username === validCredentials.username && password === validCredentials.password) {
                return { ...state, isAuthenticated: true, user: { username }, error: null };
            }
            return { ...state, error: 'Invalid credentials' };
        }

        case LOGOUT:
            return { ...state, isAuthenticated: false, user: null, error: null };

        case REGISTRATION: {
            const { username, password } = action.payload as Credentials;
            validCredentials.username = username;
            validCredentials.password = password;

            return createUserWithEmailAndPassword(auth, username, password)
                .then(() => ({
                    ...state,
                    isAuthenticated: true,
                    user: { username },
                    error: null
                }))
                .catch((error: Error) => ({
                    ...state,
                    error: error.message
                }));
        }

        default:

            return state;
    }
}