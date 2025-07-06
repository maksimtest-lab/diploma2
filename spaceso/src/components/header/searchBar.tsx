import "./searchBar.sass"
import { FaSearch } from "react-icons/fa"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"

export function SearchBar() {
    const theme = useSelector((state: RootState) => state.ui.theme)
    
    return (
        <div className={`searchBar ${theme}`}>
            <input type="text" placeholder="Search" />
            <button><FaSearch size={20}/></button>
        </div>
    )
}