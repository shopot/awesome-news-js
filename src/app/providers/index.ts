import { routerProvider } from './routerProvider';
import { themeProvider } from './themeProvider';

export const provider = () => {
  return themeProvider(routerProvider())();
};
