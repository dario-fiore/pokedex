const {resolve} = require('path');
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export default (config: any) => {
  config
    .plugin('fork-ts-checker-webpack-plugin')
    .use(forkTsCheckerWebpackPlugin, [
      {
        context: __dirname,
        async: false,
        useTypescriptIncrementalApi: true,
        tsconfig: resolve('./tsconfig.json'),
        checkSyntacticErrors: true,
        reportFiles: [
          '**',
          '!**/__tests__/**',
          '!**/node_modules/**',
          '!**/__tests__/**',
          '!**/?(*.)(spec|test).*',
        ],
        silent: false,
      },
    ]);
};
