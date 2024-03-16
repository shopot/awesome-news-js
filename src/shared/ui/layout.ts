import { footer } from './footer/footer';
import { header } from './header/header';

export const layout = (content: () => HTMLElement): HTMLElement => {
  const fragment = document.createDocumentFragment();

  fragment.append(header(), content(), footer());

  return fragment as unknown as HTMLElement;
};
