const path = require('path')
// const projectRoot = path.resolve(__dirname, '../')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(path.resolve(__dirname, '../src/assets/common.scss'))
module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.[chunkhash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.s[a|c]ss$/,
      //   loader: 'css-loader!sass-loader',
      //   // loader: 'style!css!sass?data=@import "../assets/common.scss";'
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // extractCSS: true,
          loaders: {
            test: /\.s[a|c]ss$/,
            use: [
                  'css-loader',
                  'sass-loader',
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      // Provide path to the file with resources
                      resources: './src/assets/common.scss',
                    },
                  },
                ],
              }
          }
        
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'styles.css',
      allChunks: true
    })
  ]
}
