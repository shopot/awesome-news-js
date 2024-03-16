import { Store } from '@/shared/model';

import { sourceApi } from '../api/sourceApi';
import { SourcesResponseDto, SourceState } from './types';

class SourceStore extends Store<SourceState> {
  constructor(initialState: SourceState) {
    super(initialState);
  }

  async load() {
    const { status, sources } = (await sourceApi.fetchSources()) as SourcesResponseDto;

    if (status === 'ok') {
      this.setState({
        sources,
      });
    }
  }
}

export const sourceStore = new SourceStore({
  sources: [],
});
