'use strict';

const Controller = require('egg').Controller;
const path = require('path');

class HomeController extends Controller {

  async index() {
    this.ctx.body = "欢迎来到博客系统后台";
  }

}

module.exports = HomeController;
