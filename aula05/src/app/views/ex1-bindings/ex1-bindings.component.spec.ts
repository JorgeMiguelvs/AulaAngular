import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1BindingsComponent } from './ex1-bindings.component';

describe('Ex1BindingsComponent', () => {
  let component: Ex1BindingsComponent;
  let fixture: ComponentFixture<Ex1BindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1BindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
