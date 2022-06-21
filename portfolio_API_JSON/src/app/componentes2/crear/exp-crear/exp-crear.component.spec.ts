import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCrearComponent } from './exp-crear.component';

describe('ExpCrearComponent', () => {
  let component: ExpCrearComponent;
  let fixture: ComponentFixture<ExpCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
