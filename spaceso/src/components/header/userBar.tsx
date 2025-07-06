import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/routes";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import "./userBar.sass"

export function UserBar() {
    const theme = useSelector((state: RootState) => state.ui.theme)
    
    return (
        <div className={`userBar ${theme}`}>
            <NavLink to={ROUTES.SETTINGS.url}>MA</NavLink>
            <span>Maksim Alipau</span>
        </div>
    )
}