import { layout } from '@/components/layout';
import { newsList, newsStore } from '@/features/news';
import { createElement } from '@/utils';

import { sourcesList } from '../components/sourcesList';
import { sourceStore } from '../stores/sourceStore';

export const sources = () => {
  // Load sources
  void sourceStore.load();

  // Load news
  void newsStore.loadAll();

  return layout(() => createElement('main', {}, [sourcesList(), newsList()]));
};
