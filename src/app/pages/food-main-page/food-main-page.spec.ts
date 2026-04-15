import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMainPage } from './food-main-page';

describe('FoodMainPage', () => {
  let component: FoodMainPage;
  let fixture: ComponentFixture<FoodMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
