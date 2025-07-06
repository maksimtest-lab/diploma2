import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../consts/routes";
import type { NavigationItem } from "../types/navigation";
import "./navigation.sass";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export function Navigation() {
    const theme = useSelector((state: RootState) => state.ui.theme)

    return (
        <div className={`navigation ${theme}`}>
            <nav>
                <ul>
                    {NAVIGATION.map((route: NavigationItem) => (
                        <li key={route.url}>
                            <NavLink to={route.url}>
                                {/* {route.icon && <route.icon className="nav-icon" />} */}
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}