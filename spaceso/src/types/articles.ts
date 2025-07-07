interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string;
  published_at: string;
  author: [
    {
      name: string;
      socials: {
        youtube: string;
        facebook: string;
        instagram: string;
        x: string;
        linkedin: string;
        mastodon: string;
        bluesky: string;
      } | null;
    }
  ];
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