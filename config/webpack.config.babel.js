import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import paths from './paths';

export default {

  entry: paths.appIndexJS,
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: paths.appBuild,
    publicPath: '/',
  },

  resolve: {
    alias: {
      components: paths.appComponents,
      static: paths.appStatic,
      config: paths.appConfig,
      actions: paths.appActions,
      reducers: paths.appReducers,
      utils: paths.appUtils,
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { 
            'loader': 'file-loader',
            'options': {
              name: '[name].[chunkhash:8].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            },
          },
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
    })
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
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false
      } 
    }
  },
};
