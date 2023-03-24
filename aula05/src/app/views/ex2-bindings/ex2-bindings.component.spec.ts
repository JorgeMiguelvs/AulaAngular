import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2BindingsComponent } from './ex2-bindings.component';

describe('Ex2BindingsComponent', () => {
  let component: Ex2BindingsComponent;
  let fixture: ComponentFixture<Ex2BindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2BindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
