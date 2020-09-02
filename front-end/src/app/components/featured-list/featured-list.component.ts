import { Component, OnInit } from '@angular/core';
import { companyData } from '../../data/fake-company';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent implements OnInit {

  companies: any;

  constructor() { }

  ngOnInit() {
    this.companies = companyData;
  }

}
