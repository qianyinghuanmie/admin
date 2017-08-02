/**
 * Created by fdd on 2017/7/24.
 */
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

// import {Data} from '../data';
import {Data, DataService} from '../data-service';

@Component({
  selector: 'app-root',
  templateUrl: './versionUpdate.html',
  providers: [DataService],
  styleUrls: ['../../assets/css/versionUpdate.less']
})

export class VersionUpdateComponent implements OnInit {
  img: any;
  updateText: [
    '1、使用angular2x+与ng-bootstrap构建此项目.', '2、引入了echart图表'
    ];
  menus: Observable<Data[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.updateText)
    this.getMenus();
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.dataService.getHero(+params['id']))
  }

  getMenus(): void {
    this.dataService.getMenus().then(function (menus) {
    });
  }
}
