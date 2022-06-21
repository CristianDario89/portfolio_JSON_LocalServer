import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCrearComponent } from './edu-crear.component';

describe('EduCrearComponent', () => {
  let component: EduCrearComponent;
  let fixture: ComponentFixture<EduCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
