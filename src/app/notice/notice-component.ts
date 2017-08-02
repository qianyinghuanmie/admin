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
  templateUrl: './notice.html',
  providers: [DataService],
  styleUrls: ['../../assets/css/notice.less']
})

export class NoticeComponent implements OnInit {
  img: any;
  menus: Observable<Data[]>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
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
