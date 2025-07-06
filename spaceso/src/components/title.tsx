import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import "./title.sass"

export function Title() {
    const title = useSelector((state: RootState) => state.ui.title)
    
    return (
        <h1>{title}</h1>
    )
}