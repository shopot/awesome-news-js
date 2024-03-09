import { newsList } from '@/features/news';
import { createElement } from '@/utils';

import { sourcesList } from '../components/sourcesList';

export const sources = () => createElement('div', {}, [sourcesList(), newsList()]);
