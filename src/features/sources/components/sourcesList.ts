import { newsStore } from '@/features/news';
import { createElement } from '@/utils';

import { sourcesItem } from '../components/sourceItem';
import { sourceStore } from '../stores/sourceStore';
import styles from './sources.module.css';

export const sourcesList = () => {
  const rootElement = createElement('div', {
    className: styles.sources,
  });

  const render = (): HTMLElement => {
    const { sources } = sourceStore.getState();

    const fragment = document.createDocumentFragment();

    sources.forEach((item) => {
      const sourceElement = sourcesItem({
        id: item.id,
        name: item.name,
      });

      sourceElement.addEventListener('click', () => newsStore.load(item.id));

      fragment.appendChild(sourceElement);
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
