import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCrearComponent } from './skill-crear.component';

describe('SkillCrearComponent', () => {
  let component: SkillCrearComponent;
  let fixture: ComponentFixture<SkillCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
