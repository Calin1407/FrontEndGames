import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherLanguage } from './switcher-language';

describe('SwitcherLanguage', () => {
  let component: SwitcherLanguage;
  let fixture: ComponentFixture<SwitcherLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitcherLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcherLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
