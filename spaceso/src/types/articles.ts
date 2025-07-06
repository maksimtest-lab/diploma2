interface Article {
  id: string;
  title: string;
  content: string;
}

interface ArticlesState {
  items: Article[];
  error: string | null;
  loading: boolean;
}


export type { Article, ArticlesState };