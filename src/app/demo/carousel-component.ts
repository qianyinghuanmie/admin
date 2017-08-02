/**
 * Created by fdd on 2017/7/18.
 */
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

// import {Data} from '../data';
import {Data, DataService} from '../data-service';

@Component({
  selector: 'app-root',
  templateUrl: './carousel.html',
  // styleUrls: ['../app.component.less']
  providers: [DataService, NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {
  menus: Observable<Data[]>;
  private selectedId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private dataService: DataService,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
    this.getMenus();
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.dataService.getHero(+params['id']))
  }

  getMenus(): void {
    this.dataService.getMenus().then(function (menus) {
      console.log(menus)
    });
  }
  // isSelected(menu: Data) { return menu.id === this.selectedId; }
  onSelect(menu: Data) {
    console.log(menu)
    console.log(Data)
    console.log(1)
    // this.router.navigate(['/menu', menu.id]);
  }
}
