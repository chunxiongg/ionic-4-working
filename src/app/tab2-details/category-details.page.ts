import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../store-data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
  providers: [StoreDataService]
})
export class CategoryDetailsPage implements OnInit {

  constructor(public storeDataService: StoreDataService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  displayArr = [];
  myid = null;
  individualOne;
  arr = []

  getOne = null;

  ngOnInit() {
     this.displayArr = this.storeDataService.returnMe();
     this.myid = +this.activatedRoute.snapshot.params['cat.cat_id']
     this.getOne = this.storeDataService.getAllCategory(this.myid);
     this.individualOne = this.storeDataService.returnMe(this.myid);
     console.log('my cat_id is ' + this.myid);

     for (var i = 0; i < this.displayArr.length; i++) {
      if (this.displayArr[i].cat_id === this.myid) {
        this.arr.push({
          cat_id: this.displayArr[i].cat_id, 
          cat_name: this.displayArr[i].cat_name,
          product_id: this.displayArr[i].product_id,
          product_name: this.displayArr[i].product_name,
          image: this.displayArr[i].image
        }) 
      }
    }
    console.log(this.arr);
  }

}
