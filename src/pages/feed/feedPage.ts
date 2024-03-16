import { newsList } from '@/widgets/newsList';
import { sourcesList } from '@/widgets/sourcesList';
import { newsStore } from '@/entities/news';
import { sourceStore } from '@/entities/source';
import { createElement } from '@/shared/lib';
import { layout } from '@/shared/ui';

export const feedPage = () => {
  // Load sources
  void sourceStore.load();

  // Load news
  void newsStore.loadAll();

  return layout(() => createElement('main', {}, [sourcesList(), newsList()]));
};
