import { createElement } from '@/utils';

import styles from './header.module.css';

export const header = (): HTMLElement => {
  const content = createElement(
    'h1',
    {
      className: styles.h1,
    },
    'News Portal'
  );

  const render = (): HTMLElement => {
    return createElement('header', { className: styles.header }, content);
  };

  return render();
};
