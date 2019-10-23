module.exports = {
  components: './components/index.ts',
  outputPath: './dist',

  title: 'Components',
  widths: [1200],
  port: 9000,
  openBrowser: true,
  exampleCode: ``,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.s?css?$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    }
  })
};
