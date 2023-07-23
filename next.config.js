/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['components/', 'lib/', 'pages/']
  },
  compiler: {
    styledComponents: true,
  },
}
