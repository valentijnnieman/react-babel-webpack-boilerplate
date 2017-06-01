# react-babel-webpack-boilerplate

Install:
`git clone https://github.com/valentijnnieman/react-babel-webpack-boilerplate.git project_name`
`npm install`
If you don't have Jest installed globally (for testing) run `npm install jest -g`

How to use:
run `npm start` to start the development server. The dev server sets a virtual `dist/` path where it hosts the files. In order to physically build the files, you can run `npm run-script build` to build. It can also build SASS files, which you have to import into your Javascript files. An option is set to build it into a seperate css bundle (which will also be build in `dist/`).

