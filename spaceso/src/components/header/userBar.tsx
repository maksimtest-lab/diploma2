import "./userBar.sass"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/routes";
export function UserBar() {
    return (
        <div className="userBar">
            <NavLink to={ROUTES.SETTINGS.url}>MA</NavLink>
            <span>Maksim Alipau</span>
        </div>
    )
}