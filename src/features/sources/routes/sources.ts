import { layout } from '@/components/layout';
import { newsList, newsStore } from '@/features/news';
import { createElement } from '@/utils';

import { sourcesList } from '../components/sourcesList';
import { sourceStore } from '../stores/sourceStore';

export const sources = () => {
  // Load data
  void sourceStore.load();
  void newsStore.loadAll();

  const content = createElement('main', {}, [sourcesList(), newsList()]);

  return layout(content);
};
