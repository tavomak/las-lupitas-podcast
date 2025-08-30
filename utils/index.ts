export * from './constants';

let lastRequestTime = 0;
const requestQueue: Array<(...args: any[]) => void> = [];

export const rateLimit = async () => {
  const now = Date.now();
  if (lastRequestTime + 1000 < now) {
    lastRequestTime = now;
    return Promise.resolve();
  }

  return new Promise(resolve => {
    requestQueue.push(resolve);
    if (requestQueue.length === 1) {
      setTimeout(() => {
        const resolvers = [...requestQueue];
        requestQueue.length = 0;
        resolvers.forEach(r => r());
      }, 2000);
    }
  });
};
