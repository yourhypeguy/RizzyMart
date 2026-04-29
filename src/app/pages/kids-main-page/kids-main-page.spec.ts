import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMainPage } from './kids-main-page';

describe('KidsMainPage', () => {
  let component: KidsMainPage;
  let fixture: ComponentFixture<KidsMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
