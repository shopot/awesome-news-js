import './newsList.css';

import { createElement } from '@/utils';

import { newsStore } from '../stores/newsStore';
import { newsItem } from './newsItem';

export const newsList = () => {
  const rootElement = createElement('div', {
    className: 'news',
  });

  const render = (): HTMLElement => {
    const { articles } = newsStore.getState();

    const fragment = document.createDocumentFragment();

    articles.forEach((item) => {
      const sourceElement = newsItem(item);

      fragment.appendChild(sourceElement);
    });

    // Reset element for next render
    rootElement.innerHTML = '';

    rootElement.append(fragment);

    return rootElement;
  };

  // Subscribe to store newsStore
  newsStore.subscribe('features-news', {
    update: () => render(),
  });

  return render();
};
