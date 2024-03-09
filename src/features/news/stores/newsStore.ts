import { Store } from '@/stores';

import { loadAllNews } from '../api/loadAllNews';
import { loadNews } from '../api/loadNews';
import { NewsDto, NewsState } from '../types';

const initialState: NewsState = {
  totalResults: 0,
  articles: [],
};

class NewsStore extends Store<NewsState> {
  constructor(initialState: NewsState) {
    super(initialState);
  }

  async load(sourceId: string) {
    const { status, articles, totalResults } = (await loadNews(sourceId)) as NewsDto;

    if (status === 'ok') {
      this.setState({
        totalResults,
        articles,
      });
    }
  }

  async loadAll() {
    const { status, articles, totalResults } = (await loadAllNews()) as NewsDto;

    if (status === 'ok') {
      this.setState({
        totalResults,
        articles,
      });
    }
  }
}

export const newsStore = new NewsStore(initialState);
