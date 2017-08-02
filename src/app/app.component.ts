import {Component, OnInit} from '@angular/core';

import {Data, DataService} from './data-service';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [DataService]
})

/*export class AppComponent {
 title = 'app';
 // menus = ['数据中心', '账号管理', '客户管理', '楼盘管理', '发布中心', '客服中心', '审核中心', '客户反馈', '系统配置的', '消息通知', '版本更新'];
 // myMenu= this.menus[0];
 }*/
export class AppComponent implements OnInit {
  title = 'app';
  menus: Data[];

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  getMenus(): void {
    this.dataService.getMenus().then(menus => this.menus = menus);
    this.dataService.getMenus().then(function (menus) {
      console.log(menus)
    });
  }

  ngOnInit(): void {
    this.getMenus();
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.dataService.getHero(+params['id']))
  }

  beforeChange($event: NgbPanelChangeEvent): void {

    if ($event.panelId === 'menu0') {
      this.router.navigate(['/instruction']);
      $event.preventDefault();
    }

    if ($event.panelId === 'menu3') {
      this.router.navigate(['/customerManage']);
      $event.preventDefault();
    }
    if ($event.panelId === 'menu4') {
      this.router.navigate(['/notice']);
      $event.preventDefault();
    }
    if ($event.panelId === 'menu5') {
      this.router.navigate(['/versionUpdate']);
      $event.preventDefault();
    }
  };
}


