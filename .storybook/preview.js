import '../styles/globals.css';

if (typeof global.process === 'undefined') {
  const { worker } = require('../mocks/browser');
  worker.resetHandlers();
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'blog',
    values: [
      {
        name: 'blog',
        value: '#f8b500',
      },
    ],
  },
};