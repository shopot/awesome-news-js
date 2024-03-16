import { createElement } from '@/shared/lib';

import { News } from '../model/types';
import { description } from './description/description';
import { details } from './details/details';
import { photo } from './photo/photo';

import './newsItem.css';

export const newsItem = (news: News) => {
  const meta = createElement(
    'div',
    {
      className: 'news__meta',
    },
    [photo(news), details(news)]
  );

  return createElement(
    'div',
    {
      className: 'news__item',
    },
    [meta, description(news)]
  );
};
