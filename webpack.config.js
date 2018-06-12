module.exports = {
  mode: 'development',

  entry: [ './index.tsx' ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};
