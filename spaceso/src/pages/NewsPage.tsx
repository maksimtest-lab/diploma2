import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./newsPage.sass"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import type { NewsState } from "../types/news";
import { fetchNewsList } from "../store/actions/actions";
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';
import Socials from "../components/socials";
import Backlink from "../components/backlink";

export function NewsPage() {

    const { id } = useParams<{ id: string }>(); 
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const NewsState = useSelector((state: RootState): NewsState => state.news || { item: null, error: null, loading: false });
    const news = NewsState.item;
    const theme = useSelector((state: RootState) => state.ui.theme);
    
    useEffect(() => {
        
        // if (news) {
        //     dispatch(setArticle(null));
        // }


        dispatch(fetchNewsList(id!));

    }, [dispatch, id]);

    
    if (NewsState.loading) {
        return <div>Loading news...</div>;
    }

    if (NewsState.error) {
        return <div>Error: {NewsState.error}</div>;
    }

    return (
        <div className={`${theme} newsPage`}>
            {news && (
                <>
                <div className="newsPageImage">
                    <img 
                        src={news.image_url} 
                        alt={news.title} 
                        className="newsImage"
                    />
                </div>
                <div className="newsPageContent">

                    <p className="newsContent" dangerouslySetInnerHTML={{ __html: news.summary }} />
                    {news.news_site && (
                        <div className="source">
                            Source: <a href={news.url} target="_blank" rel="noopener noreferrer">
                                {news.news_site}
                            </a>
                        </div>
                    )}
                    
                    <Socials />
                </div>

                <Backlink />
                </>
            )}
        </div>
    )
}