import { newsStore } from '@/entities/news';
import { sourceItem } from '@/entities/source';
import { Source } from '@/entities/source';

export const loadNews = ({ id, name }: Source) => {
  const sourceElement = sourceItem({ id, name });

  sourceElement.addEventListener('click', () => newsStore.loadBySource(id));

  return sourceElement;
};
