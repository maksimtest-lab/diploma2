import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./pagination.sass"
import { NavLink, useParams } from "react-router-dom";
import type { Route } from "../types/route";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Pagination({ route, next, prev }: { route: Route, next: Route, prev: Route }) {
    const { page } = useParams<{ page: string }>(); 
    const theme = useSelector((state: RootState) => state.ui.theme);
 
    return (
        <div className={`pagination ${theme}`}>
            <NavLink to={prev.url || ""} className="paginationButton prev"><FaArrowLeft /> Prev</NavLink>
            <div className="paginationButtons">
                <NavLink to={route.url?.replace(":page", "1") || ""} className={`paginationButton ${page === "1" || page === "undefined" ? "active" : ""}`}>1</NavLink>
                <NavLink to={route.url?.replace(":page", "2") || ""} className={`paginationButton ${page === "2" ? "active" : ""}`}>2</NavLink>
                <NavLink to={route.url?.replace(":page", "3") || ""} className={`paginationButton ${page === "3" ? "active" : ""}`}>3</NavLink>
                <span>...</span>
                <NavLink to={route.url?.replace(":page", "10") || ""} className={`paginationButton ${page === "10" ? "active" : ""}`}>10</NavLink>
            </div>
            <NavLink to={next.url || ""} className="paginationButton next">Next <FaArrowRight /></NavLink>
        </div>
    )
}