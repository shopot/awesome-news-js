import { Store } from '@/stores';

import { fetchSources } from '../api/fetchSources.ts';
import { SourcesResponseDto, SourceState } from '../types';

const initialState: SourceState = {
  sources: [],
};

class SourceStore extends Store<SourceState> {
  constructor(initialState: SourceState) {
    super(initialState);
  }

  async load() {
    const { status, sources } = (await fetchSources()) as SourcesResponseDto;

    if (status === 'ok') {
      this.setState({
        sources,
      });
    }
  }
}

export const sourceStore = new SourceStore(initialState);
