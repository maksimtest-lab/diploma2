import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle, setBreadcrumbs, setArticle } from "../store/actions/actions";
import "./articlePage.sass"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { ArticleState } from "../types/articles";
import { fetchArticle } from "../store/actions/actions";
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';
import Socials from "../components/socials";

export function ArticlePage() {

    const { id } = useParams<{ id: string }>(); 
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const articleState = useSelector((state: RootState): ArticleState => state.article || { item: null, error: null, loading: false });
    const article = articleState.item;
    const theme = useSelector((state: RootState) => state.ui.theme);
    
    useEffect(() => {
        dispatch(setPageTitle(article?.title || 'Article Page'));
        dispatch(setArticle(null));
        dispatch(fetchArticle(id!));
        dispatch(setBreadcrumbs([
            {url: '/', name: 'Home'},
            {url: '/articles', name: 'Articles'},
            {url: `/article/${id}`, name: article?.title ? `${article.title.slice(0, 40)}...` : 'Article'}
        ]));

    }, []);

    
    if (articleState.loading) {
        return <div>Loading article...</div>;
    }

    if (articleState.error) {
        return <div>Error: {articleState.error}</div>;
    }

    return (
        <div className={`${theme} articlePage`}>
            {article && (
                <>
                <div className="articlePageImage">
                    <img 
                        src={article.image_url} 
                        alt={article.title} 
                        className="articleImage"
                    />
                </div>
                <div className="articlePageContent">

                    <p className="articleContent" dangerouslySetInnerHTML={{ __html: article.summary }} />
                    {article.news_site && (
                        <div className="source">
                            Source: <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.news_site}
                            </a>
                        </div>
                    )}
                    
                    <Socials />
                </div>
                </>
            )}
        </div>
    )
}