module.exports = {
  "stories": [
    "../pages-Stories/**/*.stories.mdx",
    "../pages-Stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",

    "storybook-addon-next-router",
    "storybook-addon-markdown-docs",
  ],
}