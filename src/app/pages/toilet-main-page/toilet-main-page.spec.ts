import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletMainPage } from './toilet-main-page';

describe('ToiletMainPage', () => {
  let component: ToiletMainPage;
  let fixture: ComponentFixture<ToiletMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToiletMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiletMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
