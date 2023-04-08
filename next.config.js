const path = require('path')

module.exports = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      // {
      //   source: "/_error",
      //   destination: "/",
      //   permanent: true,
      // },
    ]
  },
}
