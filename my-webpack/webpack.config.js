const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/main.js',//入口
  output:{//输出配置
    path: path.join(__dirname,'./dist'),//输出目录
    filename: 'bundle.js'//输出的文件名
  },
  module: {
    rules: [
      // loader的加载顺序是从右到左的
      // css-loader是帮助webpack编译css文件. 而style-loader是将最终编译的结果放到HTML中生效
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      // less
    //   {
    //     test: /\.css$/,
    //     use: [
    //       { loader: "style-loader" },
    //       { loader: "css-loader" }
    //     ]
    //   },
    //   {
    //     test: /\.less$/,
    //     use: [
    //       { loader: "style-loader" },
    //       { loader: "css-loader" },
    //       { loader: "less-loader" }
    //     ]
    //   }

    // scss
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
    {
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "less-loader" }
      ]
    },
  {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader" }
      ]
    }
    ]

  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  mode:'development'//打包模式
}