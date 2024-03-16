import { themeConfig } from '@/shared/config';

export const themeProvider = (component: () => HTMLElement) => {
  themeConfig();

  return component;
};
