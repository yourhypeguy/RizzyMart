import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHomePage } from './food-home-page';

describe('FoodHomePage', () => {
  let component: FoodHomePage;
  let fixture: ComponentFixture<FoodHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
