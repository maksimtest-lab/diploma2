import type { IconType } from "react-icons";

export interface Route {
    url: string;
    name: string;
    icon?: IconType;
}

export interface Routes {
    HOME: Route;
    ARTICLES: Route;
    NEWS: Route;
    SETTINGS: Route;
}
