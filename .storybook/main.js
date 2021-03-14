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
  ]
}