import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import paths from './paths';

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild,
    publicPath: '/',
  },

  resolve: {
    alias: {
      components: paths.appComponents,
      static: paths.appStatic,
      config: paths.appConfig,
    },
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
        test: /\.(png|jp(e*)g|gif)$/,
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
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },  
        ],
      },
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
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
};

module.exports = config;
