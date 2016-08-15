var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

//    module: {
//         loaders: [{
//             test: /\.js?$/,
//             loaders: [ 'babel?presets[]=react,presets[]=es2015'],
//             exclude: /(node_modules|__tests__)/
//         }]
//    }
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-runtime']
            }
         }
      ]
   }
}

module.exports = config;
