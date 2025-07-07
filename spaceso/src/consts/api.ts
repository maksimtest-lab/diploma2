const LIMIT = 12;

const API_ARTICLES_URL = `https://api.spaceflightnewsapi.net/v4/articles?limit=${LIMIT}&_embed=images`;
const API_ARTICLE_URL = `https://api.spaceflightnewsapi.net/v4/articles/:id`;

export { API_ARTICLES_URL, LIMIT, API_ARTICLE_URL };
