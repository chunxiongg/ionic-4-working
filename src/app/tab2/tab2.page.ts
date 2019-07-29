import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service'
import { UniquePipe } from '../unique.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [StoreDataService, UniquePipe]
})
export class Tab2Page {
  displayArr = [];

  constructor(public storeDataService: StoreDataService,
  public router: Router) {}

  public ngOnInit() {
     this.displayArr = this.storeDataService.returnMe();
  }

  go(cat) {
    console.log(cat.cat_id)
    this.router.navigate(['tabs/category-details/', cat.cat_id])
  }

}
