import { createElement } from '@/utils';

import { News } from '../types';

export const newsDetails = (news: News): HTMLElement => {
  const author = createElement(
    'li',
    {
      className: 'news__meta-author',
    },
    news.author || news.source.name
  );

  const date = createElement(
    'li',
    { className: 'news__meta-date' },
    news.publishedAt.slice(0, 10).split('-').reverse().join('-')
  );

  return createElement(
    'ul',
    {
      className: 'news__meta-details',
    },
    [author, date]
  );
};
