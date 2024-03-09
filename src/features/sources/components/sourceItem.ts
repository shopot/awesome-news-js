import { createElement } from '@/utils';

import styles from './sourceItem.module.css';

type sourcesItemProps = {
  id: string;
  name: string;
};

export const sourcesItem = ({ id, name }: sourcesItemProps): HTMLElement => {
  return createElement(
    'div',
    {
      id: id,
      className: styles.item,
    },
    createElement(
      'span',
      {
        className: styles.name,
      },
      name
    )
  );
};
