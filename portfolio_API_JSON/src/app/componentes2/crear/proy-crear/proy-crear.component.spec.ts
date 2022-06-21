import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyCrearComponent } from './proy-crear.component';

describe('ProyCrearComponent', () => {
  let component: ProyCrearComponent;
  let fixture: ComponentFixture<ProyCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
