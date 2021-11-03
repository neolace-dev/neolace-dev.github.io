const siteRoot = __dirname + '/../../';

module.exports = {
  plugins: [
    require('postcss-import')({ path: [siteRoot] }),
    require('tailwindcss')(siteRoot + 'assets/css/tailwind.config.js'),
    require('autoprefixer')(),
  ]
}
