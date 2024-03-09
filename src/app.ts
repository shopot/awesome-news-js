import { footer } from '@/components/footer';
import { header } from '@/components/header';
import { layout } from '@/components/layout';
import { news } from '@/features/news';
import { sources, sourceStore } from '@/features/sources';
import { createElement } from '@/utils';

export const app = (): HTMLElement => {
  // Load sources
  sourceStore.load();

  const content = createElement(
    'main',
    {
      className: 'main',
    },
    [sources(), news()]
  );

  return layout(header(), content, footer());
};
