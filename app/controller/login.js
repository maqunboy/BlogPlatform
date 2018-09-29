'use strict';

const Controller = require('egg').Controller;
const request = require('request');
const APPID = "wxd4b097061979beba";
const SECRET = "46e12e2a0c9a19af154700ab7527178f";
const GRANT_TYPE = "grant_type";

class LoginController extends Controller {

  async login() {
    let code = this.ctx.request.body.code;
    request.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=${GRANT_TYPE}`, (err,response,body) => {
    })
    this.ctx.body = {msg: 0};
  }

}

module.exports = LoginController;
