import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessThumbnailComponent } from './buisness-thumbnail.component';

describe('BuisnessThumbnailComponent', () => {
  let component: BuisnessThumbnailComponent;
  let fixture: ComponentFixture<BuisnessThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
