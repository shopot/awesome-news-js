import './news.css';

import { createElement } from '@/utils';

import { newsItem } from '../components/newsItem';
import { newsStore } from '../stores/newsStore';

export const news = () => {
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
