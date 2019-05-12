const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = {
  entry: {
    'seq/app': './src/seq/app.jsx',
    'tmpl/app': './src/tmpl/app.jsx',
    'tile/app': './src/tile/app.jsx'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|ico|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        ]
      }
    ]
  }
};

const defaultConfig = Object.assign({}, baseConfig, {
  name: 'default'
});

const manyctaConfig = Object.assign({}, baseConfig, {
  name: 'manycta',
  entry: './src/manycta/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist', 'manycta'),
    filename: 'app.js'
  }
});

/**
 * Creates webpack config for sub app
 * @param {object} base webpack config object to inherit
 * @param {string} name compiler label
 * @param {string} dirname directry containing app
 */
function makeConfig(base, name, dirname, cards=[]) {
  const config = Object.assign({}, base, {
    name: name,
    entry: `./src/${dirname}/app.jsx`,
    output: {
      path: path.resolve(__dirname, 'dist', dirname),
      filename: 'app.js'
    },
    plugins: [
      new HtmlWebpackPlugin({template: `./src/${dirname}/index.html`}),
      new webpack.DefinePlugin({
        'process.env.CUCKOO_HOST': JSON.stringify(process.env.CUCKOO_HOST)
      })
    ]
  });

  // append cards to plugin
  cards.map((card) => {
    const imageURL = `https://tipsytoru.netlify.com/tile/card-${card}.png`;
    const refresh = `0; URL='/${name}/'`;
    const spec = {
      template: `./src/${dirname}/card.html`,
      filename: `card-${card}.html`,
      meta: {
        'twitter-image': {name: 'twitter:image', content: imageURL},
        'refresh': {'http-equiv': 'refresh', content: refresh}
      }
    };
    config.plugins.push(new HtmlWebpackPlugin(spec));
  });

  return config;
}

let rootConfig = makeConfig(baseConfig, 'root', '.');
rootConfig.plugins.push(
  new CopyPlugin([{from:'./src/netlify.toml'}])
);

module.exports = [
  rootConfig,
  makeConfig(baseConfig, 'manycta', 'manycta'),
  makeConfig(baseConfig, 'seq', 'seq'),
  makeConfig(baseConfig, 'tile', 'tile',
             ['2006', '2007', '2009', '2010', '2012']),
  makeConfig(baseConfig, 'tmpl', 'tmpl')
];
