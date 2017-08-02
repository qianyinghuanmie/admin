/**
 * Created by fdd on 2017/7/18.
 */
import {Injectable} from '@angular/core';

export class Data {
  constructor(public id: number, public name: string, public list: string[], public path: string, public child: boolean) {
  }
}
let Menus = [
  new Data(11, '介绍', [], 'instruction', true),
  new Data(12, 'ng-bootstrap示例', ['Carousel', 'Datepicker', 'Timepicker'], 'dataCenter', true),
  new Data(19, '第三方插件', ['echart', '待定'], 'threePlugin', true),
  new Data(13, '用户管理', [], 'customerService', false),
  // new Data(16, '客服中心', [], 'customerService', false),
  new Data(20, '消息通知', [], 'notice', true),
  new Data(21, '版本更新', [], 'versionUpdate', true)
];
let menusPromise = Promise.resolve(Menus);
@Injectable()
export class DataService {
  getMenus() {
    return menusPromise;
  }
  getHero(id: number | string) {
    return menusPromise
      .then(menus => menus.find(menu => menu.id === +id));
  }
}
