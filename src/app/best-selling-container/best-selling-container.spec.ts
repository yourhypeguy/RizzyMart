import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingContainer } from './best-selling-container';

describe('BestSellingContainer', () => {
  let component: BestSellingContainer;
  let fixture: ComponentFixture<BestSellingContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
