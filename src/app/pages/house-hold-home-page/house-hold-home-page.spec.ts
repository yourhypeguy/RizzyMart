import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHoldHomePage } from './house-hold-home-page';

describe('HouseHoldHomePage', () => {
  let component: HouseHoldHomePage;
  let fixture: ComponentFixture<HouseHoldHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseHoldHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseHoldHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
