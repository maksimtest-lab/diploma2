import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/routes";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import "./userBar.sass"

export function UserBar() {
    const theme = useSelector((state: RootState) => state.ui.theme)
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)
    
    return (
        <div className={`userBar ${theme}`}>
            {isAuthenticated ? (
                <>
                    <NavLink to={ROUTES.SETTINGS.url}>MA</NavLink>
                    <span>Maksim Alipau</span>
                </>
            ) : (
                <>
                    <NavLink to={ROUTES.LOGIN.url}>Sign In</NavLink>
                    <NavLink to={ROUTES.REGISTRATION.url}>Sign Up</NavLink>
                </>
            )}
        </div>
    )
}