import { footer } from '@/components/footer';
import { header } from '@/components/header';
import { layout } from '@/components/layout';
import { sources, sourceStore } from '@/features/sources';

const appLayout = (page: () => HTMLElement): HTMLElement => {
  return layout(header(), page(), footer());
};

export const app = (): HTMLElement => {
  // Load sources
  sourceStore.load();

  return appLayout(sources);
};
