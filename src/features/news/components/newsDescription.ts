import { createElement } from '@/utils';

import { News } from '../types';

export const newsDescription = (news: News) => {
  const title = createElement('h2', { className: 'news__description-title' }, news.title);

  const source = createElement('h3', { className: 'news__description-source' }, news.source.name);

  const content = createElement('p', { className: 'news__description-content' }, news.description);

  const more = createElement(
    'p',
    { className: 'news__description-more' },
    createElement(
      'a',
      {
        href: news.url,
      },
      'Read More'
    )
  );

  return createElement(
    'div',
    {
      className: 'news__description',
    },
    [title, source, content, more]
  );
};
