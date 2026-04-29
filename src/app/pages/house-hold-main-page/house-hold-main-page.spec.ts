import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHoldMainPage } from './house-hold-main-page';

describe('HouseHoldMainPage', () => {
  let component: HouseHoldMainPage;
  let fixture: ComponentFixture<HouseHoldMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseHoldMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseHoldMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
