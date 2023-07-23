/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  eslint: {
    dirs: ['components/', 'lib/', 'pages/'],
  },
  compiler: {
    styledComponents: true,
  },
};
