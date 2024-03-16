import data from './news.json';

export const newsApi = {
  fetchAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const articles = data.articles;

        resolve({
          articles,
          totalResults: articles.length,
          status: 'ok',
        });
      }, 1000);
    });
  },

  fetchOne: async (sourceId: string) => {
    console.log('sourceId:', sourceId);

    // Example with a fake data
    return new Promise((resolve) => {
      setTimeout(() => {
        const articles = data.articles.filter((item) => item.source.id === sourceId);

        resolve({
          articles,
          totalResults: articles.length,
          status: 'ok',
        });
      }, 1000);
    });
  },
};
