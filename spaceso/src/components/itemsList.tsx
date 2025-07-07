import "./itemsList.sass"
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import type { Article } from '../types/articles'
import ItemCard from './itemCard'
import type { Route } from '../types/route'

export function ItemsList({ items, route }: { items: Article[]; route: Route }) {
    const theme = useSelector((state: RootState) => state.ui.theme)
    
    return (
        <div className={`itemsList ${theme}`}>
            {items.map((item: Article) => (
                <ItemCard key={item.id} item={item} route={route} />
            ))}
        </div>
    )
}