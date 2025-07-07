import { useDispatch } from "react-redux";
import { setPageTitle, setBreadcrumbs } from "../store/actions/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function LoginPage() {
    const dispatch = useDispatch();
    const { user , isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(setBreadcrumbs([
            {url: '/', name: 'Home'},
            {url: '/login', name: 'Login'}
        ]));
        dispatch(setPageTitle('Login'));
    }, [dispatch]);

    return (
        <div className="loginPage">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}