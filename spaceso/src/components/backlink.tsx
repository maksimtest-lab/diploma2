import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import "./backlink.sass"

export default function Backlink() {
    const location = useLocation();
    const theme = useSelector((state: RootState) => state.ui.theme);
    const history = location.state?.history || [];
    const backLink = history.length > 1 ? history[history.length - 2] : "/";
    
    return (
        <div className={`backlink ${theme}`}>
            <NavLink to={backLink}>
                <FaArrowLeft /> Back to previous page
            </NavLink>
        </div>
    )
}