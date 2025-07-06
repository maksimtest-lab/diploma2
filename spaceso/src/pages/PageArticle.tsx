import { useParams } from "react-router-dom";

export default function PageArticle() {
    const { id } = useParams();
    
    return (
        <div>
            <h1>PageArticle {id}</h1>
        </div>
    )
}