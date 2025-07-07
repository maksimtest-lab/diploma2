import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { Route } from "../types/route";
import { NavLink } from "react-router-dom";
import "./breadcrumbs.sass"

export function Breadcrumbs() {
    const breadcrumbs = useSelector((state: RootState) => state.ui.breadcrumbs);
    return (
        <div className="breadcrumbs">
            {breadcrumbs.map((breadcrumb: Route, index: number) => (
                <NavLink to={breadcrumb.url || ''} key={breadcrumb.url || ''}>{breadcrumb.name}</NavLink>
                {index < breadcrumbs.length - 1 && ' / '}
            ))}
        </div>
    )
}