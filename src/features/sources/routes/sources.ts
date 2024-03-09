import { contentLayout } from '@/components/contentLayout';
import { newsList } from '@/features/news';
import { createElement } from '@/utils';

import { sourcesList } from '../components/sourcesList';

export const sources = () => {
  const content = createElement('main', {}, [sourcesList(), newsList()]);

  return contentLayout(content);
};
