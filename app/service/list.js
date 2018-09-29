'use strict';

const Service = require('egg').Service;
const DB_WORDS = 'blog.articles';
const DB_IMAGES = 'blog.images';

class ListService extends Service {
  
  async words () {
    
    let result = await this.app.mysql.query(
      `SELECT ID, NAME, TYPE, DATE, AUTHER_IMG FROM ${ DB_WORDS } WHERE TYPE = 'WORD'`
    )

    return result;
  }

  async content ({id}) {
    
    let result = await this.app.mysql.query(
      `SELECT ID, NAME, TYPE, DATE, AUTHER, AUTHER_IMG, CONTENTTEXT FROM ${ DB_WORDS } WHERE ID = '${id}'`
    )

    return result;
  }

  async index () {
    
    let result = await this.app.mysql.query(
      `SELECT ID, NAME, TYPE, DATE, AUTHER, AUTHER_IMG FROM ${ DB_WORDS }`
    )

    return result;
  }

  async minds () {
    
    let result = await this.app.mysql.query(
      `SELECT ID, NAME, TYPE, DATE, AUTHER, AUTHER_IMG FROM ${ DB_WORDS } WHERE TYPE = 'MIND'`
    )

    return result;
  }


  async baby () {
    
    let result = await this.app.mysql.query(
      `SELECT ID, NAME, TYPE, DATE, AUTHER, AUTHER_IMG FROM ${ DB_WORDS } WHERE TYPE = 'BABY'`
    )

    return result;
  }

  async video () {
    
    let result = await this.app.mysql.query(
      `SELECT * FROM ${ DB_IMAGES }`
    )

    return result;
  }

}

module.exports = ListService;
