module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
    images: {
      domains: ['res.cloudinary.com']
    },
    env: {
      APIURL: process.env.APIURL,
      DOMAIN: process.env.DOMAIN,
      CHROMATIC_PROJECT_TOKEN: process.env.CHROMATIC_PROJECT_TOKEN
    },
    async redirects() {
      return [
        {
          source: '/post/Learning-Algorithms',
          destination: '/post/learning-algorithms',
          permanent: true,
        },
        {
          source: `/post/Help-in-understanding-Dijkstra's-algorithm`,
          destination: '/post/help-understanding-the-dijkstras-algorithm',
          permanent: true,
        },
        {
          source: `/post/Containerise-Strapi`,
          destination: '/post/containerise-strapi',
          permanent: true,
        },
        {
          source: `/post/Divide-and-Conquer`,
          destination: '/post/divide-and-conquer',
          permanent: true,
        },
        {
          source: `/post/Recursive-function-walkthrough`,
          destination: '/post/recursive-function-walkthrough',
          permanent: true,
        },
        {
          source: `/post/Connect-With-Me`,
          destination: '/post/connect-with-me',
          permanent: true,
        },
        {
          source: `/post/About-Me`,
          destination: '/posts/About',
          permanent: true,
        },
        {
          source: `/post/Purpose-of-this-Blog`,
          destination: '/post/purpose-of-this-blog',
          permanent: true,
        },
        {
          source: `/post/Next.js-and-strapi-XML-sitemap`,
          destination: '/post/nextjs-and-strapi-xml-sitemap',
          permanent: true,
        },
        {
          source: `/post/Chromatic-Storybook`,
          destination: '/post/chromatic-storybook',
          permanent: true,
        }
      ]
    },
  }