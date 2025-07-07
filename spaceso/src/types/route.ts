import type { IconType } from "react-icons";

export interface Route {
    url: string;
    name: string;
    icon?: IconType;
}

export interface Routes {
    HOME: Route;
    ARTICLES: Route;
    ARTICLES_PAGE: Route;
    ARTICLES_PAGE_NEXT: Route;
    ARTICLES_PAGE_PREV: Route;
    NEWS: Route;
    SETTINGS: Route;
    ARTICLE: Route;
}
