# react-babel-webpack-boilerplate
This is my boilerplate I use for quickly setting up an React/Redux dev enviroment with automated build tools.
It uses: 
- React
- Redux
- Webpack
- Webpack dev server (https://github.com/webpack/webpack-dev-server)
- Webpack SASS loader (https://github.com/webpack-contrib/sass-loader)
- Babel
- Jest

# Install:
`git clone https://github.com/valentijnnieman/react-babel-webpack-boilerplate.git project_name`
`npm install`
If you don't have Jest installed globally (for testing) run `npm install jest -g`

# How to use:
run `npm start` to start the development server. The dev server sets a virtual `dist/` path where it hosts the files. In order to physically build the files, you can run `npm run-script build` to build. It can also build SASS files, which you have to import into your Javascript files. An option is set to build it into a seperate css bundle (which will also be build in `dist/`).

