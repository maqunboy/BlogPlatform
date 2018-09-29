'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {

  async words() {
    const res = await this.service.list.words();
    this.ctx.body = res;
  }

  async minds() {
    const res = await this.service.list.minds();
    this.ctx.body = res;
  }

  async content() {
    let json = this.ctx.request.body;
    const res = await this.service.list.content(json);
    this.ctx.body = res[0];
  }

  async baby() {
    const res = await this.service.list.baby();
    this.ctx.body = res;
  }

  async video() {
    const res = await this.service.list.video();
    this.ctx.body = res;
  }

  async videoFour() {
    const res = await this.service.list.video();
    this.ctx.body = res.sort((a,b) => { return a.id - b.id; }).splice(0, 4);
  }

  async index() {
    const res = await this.service.list.index();
    this.ctx.body = res;
  }

}

module.exports = ListController;
