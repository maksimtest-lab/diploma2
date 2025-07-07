import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle, setBreadcrumbs } from "../store/actions/actions";
import "./articlePage.sass"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { ArticleState } from "../types/articles";
import { fetchArticle } from "../store/actions/actions";
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';

export function ArticlePage() {
    const { id } = useParams<{ id: string }>(); 
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const articleState = useSelector((state: RootState): ArticleState => state.article || { item: null, error: null, loading: false });
    const article = articleState.item;
    
    useEffect(() => {
        dispatch(setPageTitle('Article Page'));
        dispatch(fetchArticle(id!));
        dispatch(setBreadcrumbs([
            {url: '/', name: 'Home'},
            {url: '/articles', name: 'Articles'},
            {url: ``, name: `Article ${id}`}
        ]));
    }, [dispatch, id]);
    
    if (articleState.loading) {
        return <div>Loading article...</div>;
    }

    if (articleState.error) {
        return <div>Error: {articleState.error}</div>;
    }

    return (
        <div className="articlePage">
            <div className="articlePageContent">
                {article}
            </div>
        </div>
    )
}