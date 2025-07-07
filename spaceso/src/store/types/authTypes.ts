export interface User {
    username: string;
    // Add other user properties here if needed
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
}
