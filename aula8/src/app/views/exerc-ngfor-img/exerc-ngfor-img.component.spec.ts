import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercNgforImgComponent } from './exerc-ngfor-img.component';

describe('ExercNgforImgComponent', () => {
  let component: ExercNgforImgComponent;
  let fixture: ComponentFixture<ExercNgforImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercNgforImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercNgforImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
