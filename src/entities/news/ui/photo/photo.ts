import { createElement } from '@/shared/lib';
import { News } from '../../model/types';

export const photo = (news: News): HTMLElement => {
  const photo = createElement('div', {
    className: 'news__meta-photo',
  });

  photo.style.backgroundImage = `url(${news.urlToImage || 'img/news_placeholder.jpg'})`;

  return photo;
};
