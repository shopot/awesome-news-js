import { loadNews } from '@/features/source';
import { sourceStore } from '@/entities/source';
import { createElement } from '@/shared/lib';

import styles from './sourcesList.module.css';

export const sourcesList = () => {
  const rootElement = createElement('div', {
    className: styles.sources,
  });

  const render = (): HTMLElement => {
    const { sources } = sourceStore.getState();

    const fragment = document.createDocumentFragment();

    sources.forEach((source) => {
      fragment.appendChild(loadNews(source));
    });

    // Reset element for next render
    rootElement.innerHTML = '';

    rootElement.append(fragment);

    return rootElement;
  };

  // Subscribe to store sourceStore
  sourceStore.subscribe('features-sources', {
    update: () => render(),
  });

  return render();
};
