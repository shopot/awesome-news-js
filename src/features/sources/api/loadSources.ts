import fakeData from '../data/fake-data.json';

export const loadSources = async () => {
  // Example with a fake data
  return new Promise((resolve) => {
    setTimeout(() => {
      const sources = fakeData.sources;

      resolve({
        sources,
        status: 'ok',
      });
    }, 1000);
  });
};
