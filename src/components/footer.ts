import { createElement } from '@/utils';

import styles from './footer.module.css';

export const footer = (): HTMLElement => {
  const link = createElement(
    'a',
    {
      href: 'https://newsapi.org',
      className: styles.copyright,
    },
    '2024 - NewsAPI'
  );

  const render = (): HTMLElement => {
    return createElement('footer', { className: styles.footer }, createElement('p', {}, link));
  };

  return render();
};
