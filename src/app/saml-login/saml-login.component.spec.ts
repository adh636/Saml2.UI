import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlLoginComponent } from './saml-login.component';

describe('SamlLoginComponent', () => {
  let component: SamlLoginComponent;
  let fixture: ComponentFixture<SamlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
