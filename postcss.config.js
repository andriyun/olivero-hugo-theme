module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['./themes/olivero-hugo-theme/assets/css'], // where to look for the css assets
    }),
    require('postcss-nested'),
    require('postcss-custom-media'),
    require('postcss-custom-properties')({
      // preserve: false,
    }),
    require('postcss-calc'),
    require('autoprefixer')({
      grid: 'no-autoplace',
    }),
    require('perfectionist')({
      indentSize: 2,
    }),
    // require('postcss-rtl'),
  ],
};
