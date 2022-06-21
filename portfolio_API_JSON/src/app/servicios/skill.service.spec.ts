import { TestBed } from '@angular/core/testing';

import { skillservice } from './skill.service';

describe('skillservice', () => {
  let service: skillservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(skillservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
