import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import type { Article } from '../types/articles'
import { getArticleDate } from '../helpers' 
import "./itemCard.sass"
import { NavLink } from 'react-router-dom'
import type { Route } from '../types/route'

export default function ItemCard({ item, route }: { item: Article; route: Route }) { 
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className={`itemCard ${theme}`}>
            <NavLink to={route.url.replace(":id", item.id.toString())}>
                <div className="itemCardImage" style={{ backgroundImage: `url(${item.image_url})` }}></div>
                <div className="itemCardContent">
                    <div className="itemCardDate">{getArticleDate(item.published_at)}</div>
                    <h2 className="itemCardTitle">{item.title}</h2>
                </div>  
            </NavLink>
        </div>
    )
}