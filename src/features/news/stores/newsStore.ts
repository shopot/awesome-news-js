import { Store } from '@/stores';

import { fetchAllNews } from '../api/fetchAllNews.ts';
import { fetchNews } from '../api/fetchNews.ts';
import { NewsResponseDto, NewsState } from '../types';

class NewsStore extends Store<NewsState> {
  constructor(initialState: NewsState) {
    super(initialState);
  }

  async load(sourceId: string) {
    const { status, articles, totalResults } = (await fetchNews(sourceId)) as NewsResponseDto;

    if (status === 'ok') {
      this.setState({
        totalResults,
        articles,
      });
    }
  }

  async loadAll() {
    const { status, articles, totalResults } = (await fetchAllNews()) as NewsResponseDto;

    if (status === 'ok') {
      this.setState({
        totalResults,
        articles,
      });
    }
  }
}

export const newsStore = new NewsStore({
  totalResults: 0,
  articles: [],
});
