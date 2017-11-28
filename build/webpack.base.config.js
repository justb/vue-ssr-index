const path = require('path')
// const projectRoot = path.resolve(__dirname, '../')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue'],
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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // extractCSS: true,
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader?data=@import "~/assets/common.scss";',
              
              // ExtractTextPlugin.extract({
              //     use: ['css-loader','sass-loader',{
              //       loader: 'sass-resources-loader',
              //       options: {
              //         // Provide path to the file with resources
              //         resources: path.resolve(__dirname, '../src/assets/common.scss'),
              //       },
              //     }],
              //     fallback: 'vue-style-loader'
              // })
          }
        }
      },
      {
        test: /\.s[a|c]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'sass-loader',{
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: path.resolve(__dirname, '../src/assets/common.scss'),
            },
          }]
        }),
        // loader: 'style!css!sass'
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
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename:'styles.css',
    //   allChunks: true
    // })
  ]
}
