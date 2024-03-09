import fakeData from '../data/fake-data.json';

export const loadNews = async (sourceId: string) => {
  console.log('sourceId:', sourceId);

  // Example with a fake data
  return new Promise((resolve) => {
    setTimeout(() => {
      const articles = fakeData.articles.filter((item) => item.source.id === sourceId);

      resolve({
        articles,
        totalResults: articles.length,
        status: 'ok',
      });
    }, 1000);
  });
};
