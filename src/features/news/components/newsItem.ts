import { createElement } from '@/utils';

import { News } from '../types';
import { newsDescription } from './newsDescription';
import { newsDetails } from './newsDetails';
import { newsPhoto } from './newsPhoto';

export const newsItem = (news: News) => {
  const meta = createElement(
    'div',
    {
      className: 'news__meta',
    },
    [newsPhoto(news), newsDetails(news)]
  );

  return createElement(
    'div',
    {
      className: 'news__item',
    },
    [meta, newsDescription(news)]
  );
};
