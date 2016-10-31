module.exports = {

  devtool: '#inline-source-map',

  module: {

    resolve: {

      extensions: ['', '.js', '.jsx']

    },

    loaders: [

      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['airbnb']
        }
      },

      {
        test: /\.json$/,
        loader: 'json',
      },

    ]
  },

  externals: {
    
    'react/addons': true,

    'react/lib/ExecutionEnvironment': true,

    'react/lib/ReactContext': true

  }

};
