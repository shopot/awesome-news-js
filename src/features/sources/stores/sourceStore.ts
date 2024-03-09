import { Store } from '@/stores';

import { loadSources } from '../api/loadSources';
import { SourcesDto, SourceState } from '../types';

const initialState: SourceState = {
  sources: [],
};

class SourceStore extends Store<SourceState> {
  constructor(initialState: SourceState) {
    super(initialState);
  }

  async load() {
    const { status, sources } = (await loadSources()) as SourcesDto;

    if (status === 'ok') {
      this.setState({
        sources,
      });
    }
  }
}

export const sourceStore = new SourceStore(initialState);
