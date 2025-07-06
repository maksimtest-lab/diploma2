import Logo from "./logo";
import { SearchBar } from "./searchBar";
import { UserBar } from "./userBar";
import "./header.sass";

export function Header() {
    return (
        <header className="header">
            <Logo />
            <SearchBar />
            <UserBar />
        </header>
    )
}