interface Article {
  id: string;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at?: string;
  featured: boolean;
  launches: any[];
  events: any[];
  author?: {
    name: string;
    socials?: {
      youtube?: string;
      facebook?: string;
      instagram?: string;
      x?: string;
      linkedin?: string;
      mastodon?: string;
      bluesky?: string;
    } | null;
  }[];
}

interface ArticlesState {
  items: Article[];
  error: string | null;
  loading: boolean;
}

interface ArticleState {
  item: Article;
  error: string | null;
  loading: boolean;
}


export type { Article, ArticlesState, ArticleState };