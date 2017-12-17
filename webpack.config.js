import paths from './paths';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild,
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'images/[hash]-[name].[ext]',
            },
          },
          'image-webpack-loader',
        ] 
      }
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: paths.appIndexHtmlTemplate,
      title: 'Omise Tamboon React',
      favicon: `${paths.appPublic}/favicon.ico`,
      inject: true,
    }),
  ],

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },
};

module.exports = config;
