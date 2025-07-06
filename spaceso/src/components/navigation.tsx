import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../consts/routes";
import type { NavigationItem } from "../types/navigation";
import "./navigation.sass";

export function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    {NAVIGATION.map((route: NavigationItem) => (
                        <li key={route.url}>
                            <NavLink to={route.url}>
                                {route.icon && <route.icon className="nav-icon" />}
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}