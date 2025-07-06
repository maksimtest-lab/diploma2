import { Navigation } from "../components";
import { useDispatch } from 'react-redux';
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';
import { setPageTitle } from '../store/actions/actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { fetchArticles } from '../store/actions/actions';
import type { Article, ArticlesState } from '../types/articles';

export function ArticlesPage() {
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const articlesState = useSelector((state: RootState): ArticlesState => state.articles || { items: [], error: null, loading: false });
    console.log(articlesState);
    
    useEffect(() => {
        console.log('Fetching articles...');
        dispatch(setPageTitle('Articles'));
        dispatch(fetchArticles());
    }, [dispatch]);

    if (!articlesState) {
        return <div>Loading...</div>;
    }

    if (articlesState.loading) {
        return <div>Loading articles...</div>;
    }

    if (articlesState.error) {
        return <div>Error: {articlesState.error}</div>;
    }

    return (
        <>
            <Navigation />
            {articlesState.items.map((article: Article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </>
    )
}