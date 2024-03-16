import { Store } from '@/shared/model';

import { newsApi } from '../api/newsApi';
import { NewsResponseDto, NewsState } from './types';

class NewsStore extends Store<NewsState> {
  constructor(initialState: NewsState) {
    super(initialState);
  }

  async loadBySource(sourceId: string) {
    const { status, articles, totalResults } = (await newsApi.fetchOne(sourceId)) as NewsResponseDto;

    if (status === 'ok') {
      this.setState({
        totalResults,
        articles,
      });
    }
  }

  async loadAll() {
    const { status, articles, totalResults } = (await newsApi.fetchAll()) as NewsResponseDto;

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
