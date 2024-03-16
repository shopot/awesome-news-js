import { createElement } from '@/shared/lib';
import { type News } from '../../model/types';

export const description = (news: News) => {
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
