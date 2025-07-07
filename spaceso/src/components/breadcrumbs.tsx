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
                <div key={breadcrumb.url || ''}>
                    <NavLink to={breadcrumb.url || ''} title={breadcrumb.name}>{breadcrumb.name}</NavLink>
                    {index < breadcrumbs.length - 1 && ' / '}
                </div>
            ))}
        </div>
    )
}