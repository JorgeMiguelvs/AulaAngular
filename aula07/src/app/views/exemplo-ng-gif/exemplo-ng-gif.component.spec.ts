import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgGifComponent } from './exemplo-ng-gif.component';

describe('ExemploNgGifComponent', () => {
  let component: ExemploNgGifComponent;
  let fixture: ComponentFixture<ExemploNgGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploNgGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
