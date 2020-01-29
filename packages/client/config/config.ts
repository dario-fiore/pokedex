import { IConfig } from 'umi-types';
import webpackPlugin from './plugin.config';
import routes from './router.config';
const getLocalIdent = require('css-loader-1/lib/getLocalIdent');

const { NODE_ENV } = process.env;

const config: IConfig = {
  treeShaking: true,
  theme: {
    '@primary-color': '#FFCB05',
  },
  lessLoaderOptions: {},
  generateCssModulesTypings: true,
  chainWebpack: webpackPlugin,
  hash: true,
  cssLoaderOptions: {
    localIdentName: NODE_ENV === 'production' ? '[hash:base64]' : '[path][name]__[local]',
    modules: true,
    localsConvention: 'dashes',
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      localIdentName: string,
      localName: string,
      options: any,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      } else {
        return getLocalIdent(context, localIdentName, localName, options);
      }
    },
  },
  manifest: {
    basePath: '/',
  },
  routes,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'statispay-fe',
        dll: false,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
