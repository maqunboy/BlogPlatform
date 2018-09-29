'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const multer = require('koa-multer');
const path = require('path');
const __HOST_NAME__ = "http://localhost:7001/";


//文件上传
//配置
const storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../uploads/"))
  },
  //修改文件名称
  filename: function (req, file, cb) {
    cb(null, Date.parse(new Date()).toString() + '.png');
  }
})

//加载配置
const upload = multer({ storage: storage });


module.exports = app => {

  const { router, controller } = app;
  // 测试服务首页
  router.get('/', controller.home.index)
  // 首页文章列表
  router.get('/list', controller.list.index)
  // 文章列表
  router.get('/words', controller.list.words)
  // 感悟列表
  router.get('/minds', controller.list.minds)
  // 宝贝列表
  router.post('/baby', controller.list.baby)
  // 首页图片列表
  router.get('/video', controller.list.videoFour)
  // 纪实列表
  router.post('/video', controller.list.video)
  // 查询文章内容
  router.post('/content', controller.list.content)
  // 编辑文章
  router.put('/words', controller.edit.words)
  // 编辑图片
  router.put('/video', controller.edit.video)
  // 用户登录
  router.post('/login', controller.login.login)
  // 用户上传图片
  router.post('/upload', upload.single('upload'), async (ctx) => { ctx.body = { code: 0, msg: "文件上传成功！", url: __HOST_NAME__ + Date.parse(new Date()).toString() + '.png' } })

};
