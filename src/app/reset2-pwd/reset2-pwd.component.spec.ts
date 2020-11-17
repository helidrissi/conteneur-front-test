import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reset2PwdComponent } from './reset2-pwd.component';

describe('Reset2PwdComponent', () => {
  let component: Reset2PwdComponent;
  let fixture: ComponentFixture<Reset2PwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reset2PwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reset2PwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
