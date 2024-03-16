import { createElement } from '@/shared/lib';

import styles from './header.module.css';

export const header = (): HTMLElement => {
  const content = createElement(
    'h1',
    {
      className: styles.h1,
    },
    'News Portal'
  );

  return createElement('header', { className: styles.header }, content);
};
