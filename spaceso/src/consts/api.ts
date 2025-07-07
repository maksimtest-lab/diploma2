const LIMIT = 12;

const API_ARTICLES_URL = `https://api.spaceflightnewsapi.net/v4/articles?limit=${LIMIT}&_embed=images`;
const API_ARTICLE_URL = `https://api.spaceflightnewsapi.net/v4/articles/:id`;

const API_NEWSLIST_URL = `https://api.spaceflightnewsapi.net/v4/blogs?limit=${LIMIT}&_embed=images`;
const API_NEWS_URL = `https://api.spaceflightnewsapi.net/v4/blogs/:id`;



export { API_ARTICLES_URL, LIMIT, API_ARTICLE_URL, API_NEWSLIST_URL, API_NEWS_URL };
