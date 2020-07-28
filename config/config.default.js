/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595521052463_7230';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置运行时相关文件存储路径
  config.rundir = process.cwd() + '/run';

  // 配置日志目录
  config.logger = {
    dir: path.join(process.cwd(), 'logs'),
  };

  // 配置静态资源路径
  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public',
  };
  return {
    ...config,
    ...userConfig,
  };
};
