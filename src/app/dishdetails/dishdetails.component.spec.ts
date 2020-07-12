import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishdetailsComponent } from './dishdetails.component';

describe('DishdetailsComponent', () => {
  let component: DishdetailsComponent;
  let fixture: ComponentFixture<DishdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
