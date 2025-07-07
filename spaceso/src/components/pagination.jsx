import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./pagination.sass"
import { NavLink, useLocation } from "react-router-dom";
import type { Route } from "../types/route";

export default function Pagination({ route, next, prev }: { route: Route, next: Route, prev: Route }) {
    const location = useLocation();
    const page = location.pathname.split("/").pop();

    return (
        <div className="pagination">
            <NavLink to={prev.url} className="paginationButton prev">Prev <FaArrowLeft /></NavLink>
            <div className="paginationButtons">
                <NavLink to={route.url.replace(":page", "1")} className="paginationButton active">1</NavLink>
                <NavLink to={route.url.replace(":page", "2")} className="paginationButton">2</NavLink>
                <NavLink to={route.url.replace(":page", "3")} className="paginationButton">3</NavLink>
                <span>...</span>
                <NavLink to={route.url.replace(":page", "10")} className="paginationButton">10</NavLink>
            </div>
            <NavLink to={next.url} className="paginationButton next">Next <FaArrowRight /></NavLink>
        </div>
    )
}