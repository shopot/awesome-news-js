import fakeData from '../data/fake-data.json';

export const loadAllNews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const articles = fakeData.articles;

      resolve({
        articles,
        totalResults: articles.length,
        status: 'ok',
      });
    }, 1000);
  });
};
