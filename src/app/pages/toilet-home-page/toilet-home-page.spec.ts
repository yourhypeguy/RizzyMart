import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletHomePage } from './toilet-home-page';

describe('ToiletHomePage', () => {
  let component: ToiletHomePage;
  let fixture: ComponentFixture<ToiletHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToiletHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiletHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
