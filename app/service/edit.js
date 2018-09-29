'use strict';

const Service = require('egg').Service;
const DB_WORDS = 'blog.articles';
const DB_VIDEOS = 'blog.images';


class EditService extends Service {
  
  async words ({id, name, type, img, date, auther, content, nickName, avatarUrl}) {
    let result = await this.app.mysql.query(
      `
        INSERT INTO ${ DB_WORDS } (ID, NAME, TYPE, IMG, DATE, AUTHER, CONTENTTEXT, AUTHER_IMG) 
        VALUES ('${id}', '${name}', '${type}', '${img || ''}', '${date}', '${nickName || ''}', '${content}', '${avatarUrl}')
      `
    )

    return result;
  }


  async video ({id, url, update, album, first, nickName, avatarUrl}) {
    let result = await this.app.mysql.query(
      `
        INSERT INTO ${ DB_VIDEOS } (ID, URL, TIME, ALBUM, FIRST, AUTHER, AUTHER_IMG) 
        VALUES ('${id}', '${url}', '${update}', '${album}', '${first}', '${nickName}', '${avatarUrl}')
      `
    )

    return result;
  }

}

module.exports = EditService;
