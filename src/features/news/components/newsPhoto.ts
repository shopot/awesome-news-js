import { createElement } from '@/utils';

import { News } from '../types';

export const newsPhoto = (news: News): HTMLElement => {
  const photo = createElement('div', {
    className: 'news__meta-photo',
  });

  photo.style.backgroundImage = `url(${news.urlToImage || 'img/news_placeholder.jpg'})`;

  return photo;
};
