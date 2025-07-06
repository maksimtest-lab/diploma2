import "./searchBar.sass"
import { FaSearch } from "react-icons/fa"

export function SearchBar() {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search" />
            <button><FaSearch size={20}/></button>
        </div>
    )
}