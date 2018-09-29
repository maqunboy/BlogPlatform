'use strict';

const Controller = require('egg').Controller;

class EditController extends Controller {

  async words() {
    let json = this.ctx.request.body;
    const res = await this.service.edit.words(json);
    this.ctx.body = { msg: "发布成功！" }
  }

  async video() {
    let json = this.ctx.request.body;
    const res = await this.service.edit.video(json);
    this.ctx.body = { msg: "发布成功！" }
  }

}

module.exports = EditController;
