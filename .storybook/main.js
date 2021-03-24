module.exports = {
  "stories": [
    "../Stories/**/*.stories.mdx",
    "../Stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
    webpackFinal: async (config, { configType }) => {
      // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
      // You can change the configuration based on that.
      // 'PRODUCTION' is used when building the static version of storybook.
  
      // Make whatever fine-grained changes you need
      config.node = { fs: 'empty', tls: 'empty', net: 'empty', module: 'empty', console: true };
  
      // Return the altered config
      return config;
    },
  };
