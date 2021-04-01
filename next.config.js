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
  }