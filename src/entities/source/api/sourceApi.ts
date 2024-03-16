import data from './sources.json';

export const sourceApi = {
  fetchSources: async () => {
    // Example with a fake data
    return new Promise((resolve) => {
      setTimeout(() => {
        const sources = data.sources;

        resolve({
          sources,
          status: 'ok',
        });
      }, 1000);
    });
  },
};
