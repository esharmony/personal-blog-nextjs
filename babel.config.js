module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['next/babel'],
    env: {
      testing: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      },
    },
  };
};