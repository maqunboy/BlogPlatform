'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534401852682_4552';
  
  // 防止 CSRF 设置白名单
  config.security = {
    csrf: { enable: false },
    domainWhiteList: [ 'http://localhost:7001' ]
  }

  //添加静态资源
  config.static = {
    dir: [path.join(appInfo.baseDir, '/uploads/'), path.join(appInfo.baseDir, '/.well-known/pki-validation')],
    prefix: '/',
    dynamic: true,
    preload: false
  }
  
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '',
      // 端口号
      port: '',
      // 用户名
      user: '',
      // 密码
      password: '',
      // 数据库名
      database: '',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your config here
  config.middleware = [];

  return config;
};
