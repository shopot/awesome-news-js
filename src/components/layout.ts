export const layout = (slotHeader: HTMLElement, slotContent: HTMLElement, slotFooter: HTMLElement): HTMLElement => {
  const fragment = document.createDocumentFragment();

  fragment.append(slotHeader, slotContent, slotFooter);

  return fragment as unknown as HTMLElement;
};
