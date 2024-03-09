import { footer } from './footer';
import { header } from './header';

export const contentLayout = (slotContent: HTMLElement): HTMLElement => {
  const fragment = document.createDocumentFragment();

  fragment.append(header(), slotContent, footer());

  return fragment as unknown as HTMLElement;
};