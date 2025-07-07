import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./pagination.sass"
import { NavLink, useParams } from "react-router-dom";
import type { Route } from "../types/route";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Pagination({ route }: { route: Route }) {
    const { page } = useParams<{ page: string }>() || { page: "1" }; 
    const theme = useSelector((state: RootState) => state.ui.theme);
 
    return (
        <div className={`pagination ${theme}`}>
            <NavLink to={route.url?.replace(":page", `${Number(page) - 1}`) || ""} className={`paginationButton prev ${Number(page) === 1 ? "notActive" : ""}`}><FaArrowLeft /> Prev</NavLink>
            <div className="paginationButtons">
                <NavLink to={route.url?.replace(":page", "1") || ""} className={`paginationButton ${page === "1" || page === "undefined" ? "active" : ""}`}>1</NavLink>
                <NavLink to={route.url?.replace(":page", "2") || ""} className={`paginationButton ${page === "2" ? "active" : ""}`}>2</NavLink>
                <NavLink to={route.url?.replace(":page", "3") || ""} className={`paginationButton ${page === "3" ? "active" : ""}`}>3</NavLink>
                <span>...</span>
                <NavLink to={route.url?.replace(":page", "10") || ""} className={`paginationButton ${page === "10" ? "active" : ""}`}>10</NavLink>
            </div>
            <NavLink to={route.url?.replace(":page", `${Number(page) + 1}`) || ""} className={`paginationButton next ${Number(page) === 10 ? "notActive" : ""}`}>Next <FaArrowRight /></NavLink>
        </div>
    )
}