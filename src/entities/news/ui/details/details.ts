import { createElement } from '@/shared/lib';
import { type News } from '../../model/types';

export const details = (news: News): HTMLElement => {
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
