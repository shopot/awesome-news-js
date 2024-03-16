import { createElement } from '@/shared/lib';

import styles from './sourceItem.module.css';

type sourceItemProps = {
  id: string;
  name: string;
};

export const sourceItem = ({ id, name }: sourceItemProps): HTMLElement => {
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
