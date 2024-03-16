type ElementAttribute = {
  [key: string]: string | number | boolean;
};

export const createElement = (
  tagName: string,
  attributes: ElementAttribute = {},
  children: string | Node | NodeList | HTMLElement[] = ''
): HTMLElement => {
  const element = document.createElement(tagName);

  // Set attributes
  for (const key in attributes) {
    if (key === 'className') {
      element.className = attributes[key].toString();
    } else {
      element.setAttribute(key, attributes[key].toString());
    }
  }

  // Add children
  if (typeof children === 'string' && children) {
    element.innerHTML = children;
  } else if (children instanceof Array && children.length > 0) {
    children.forEach((child) => {
      if (child instanceof Node) {
        element.appendChild(child);
      }
    });
  } else if (children instanceof HTMLElement && children) {
    element.appendChild(children);
  }

  return element;
};
