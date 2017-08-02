/**
 * Created by fdd on 2017/7/18.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // menus = ['数据中心', '账号管理', '客户管理', '楼盘管理', '发布中心', '客服中心', '审核中心', '客户反馈', '系统配置的', '消息通知', '版本更新'];
    let menus = [
      {id: 11, name: '数据中心', list: ['客户分析', '其他分析']},
      {id: 12, name: '账号管理', list: ['客户分析', '其他分析']},
      {id: 13, name: '客户管理', list: ['客户分析', '其他分析']},
      {id: 14, name: '楼盘管理', list: ['客户分析', '其他分析']},
      {id: 15, name: '发布中心', list: ['客户分析', '其他分析']},
      {id: 16, name: '客服中心', list: ['客户分析', '其他分析']},
      {id: 17, name: '审核中心', list: ['客户分析', '其他分析']},
      {id: 18, name: '客户反馈', list: ['客户分析', '其他分析']},
      {id: 19, name: '系统配置', list: ['客户分析', '其他分析']},
      {id: 20, name: '消息通知', list: ['客户分析', '其他分析']},
      {id: 21, name: '版本更新', list: ['客户分析', '其他分析']}
    ];
    return {menus};
  }
}
