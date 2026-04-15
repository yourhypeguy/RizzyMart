import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizzyDocumentation } from './rizzy-documentation';

describe('RizzyDocumentation', () => {
  let component: RizzyDocumentation;
  let fixture: ComponentFixture<RizzyDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RizzyDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RizzyDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
