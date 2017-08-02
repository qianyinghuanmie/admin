/**
 * Created by fdd on 2017/7/21.
 */
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as echarts from 'echarts/dist/echarts.js'
import {Data, DataService} from '../data-service';

@Component({
  selector: 'app-root',
  templateUrl: './threePlugin.html',
  providers: [DataService],
  // styleUrls: ['../app.component.less']
})

export class ThreePluginComponent implements OnInit {
  img: any;
  menus: Observable<Data[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    const basic_lines = echarts.init(document.getElementById('myChart'));
    basic_lines.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
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
