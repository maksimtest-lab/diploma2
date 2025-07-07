import { useDispatch } from "react-redux";
import { setPageTitle, setBreadcrumbs } from "../store/actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ROUTES } from "../consts/routes";
import { Navigate, NavLink } from "react-router-dom";
import { login } from "../store/actions/actions";
import { useRef } from "react";
import "./registrationPage.sass"

export function LoginPage() {
    const dispatch = useDispatch();
    const { isAuthenticated, error } = useSelector((state: RootState) => state.auth);
    const { theme } = useSelector((state: RootState) => state.ui);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(setBreadcrumbs([
            {url: '/', name: 'Home'},
            {url: '/login', name: 'Login'}
        ]));
        dispatch(setPageTitle('Sign In'));
    }, [dispatch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(emailRef.current?.value || '', passwordRef.current?.value || ''));
    }

    if (isAuthenticated) {
        return <Navigate to={ROUTES.ARTICLES.url} />;
    }

    return (
        <div className="loginPage">
            <div className={`loginPageForm ${theme}`}>
                <form onSubmit={(handleSubmit)}>
                    <div className="loginPageFormGroup">
                        <label htmlFor="email">
                            <span>Email</span>
                        </label>
                            <input type="text" placeholder="Your email" id="email" required ref={emailRef}/>
                    </div>
                    <div className="loginPageFormGroup">
                        <label htmlFor="password">
                            <span>Password</span>
                        </label>
                        <input type="password" placeholder="Password" id="password" required ref={passwordRef}  />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <NavLink to={ROUTES.REGISTRATION.url}>Sign In</NavLink></p>
            </div>
        </div>
    )
}