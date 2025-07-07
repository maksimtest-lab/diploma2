import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from "./components";
import { MainPage } from './pages';
import { ROUTES } from "./consts/routes";
import { ArticlesPage } from "./pages";
import { ArticlePage } from "./pages";
import { NewsPage } from "./pages";
import { Settings } from "./pages";
import { PageNotFound } from "./pages";

import "./App.sass";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={ROUTES.HOME.url} element={<MainPage />} />
                    <Route path={ROUTES.ARTICLES.url} element={<ArticlesPage />} />
                    <Route path={ROUTES.ARTICLE.url} element={<ArticlePage />} />
                    <Route path={ROUTES.ARTICLES_PAGE.url} element={<ArticlesPage />} />
                    <Route path={ROUTES.NEWS.url} element={<NewsPage />} />
                    <Route path={ROUTES.SETTINGS.url} element={<Settings />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
