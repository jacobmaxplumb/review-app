import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buisness-thumbnail',
  templateUrl: './buisness-thumbnail.component.html',
  styleUrls: ['./buisness-thumbnail.component.scss']
})
export class BuisnessThumbnailComponent implements OnInit {

  @Input() company;

  constructor() { }

  ngOnInit() {
  }

}
