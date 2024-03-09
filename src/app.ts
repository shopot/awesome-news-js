import { sourceStore } from '@/features/sources';
import { router } from '@/routes';

export const app = (): HTMLElement => {
  // Load sources
  sourceStore.load();

  return router();
};
