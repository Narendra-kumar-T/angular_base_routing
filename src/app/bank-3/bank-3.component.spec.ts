import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bank3Component } from './bank-3.component';

describe('Bank3Component', () => {
  let component: Bank3Component;
  let fixture: ComponentFixture<Bank3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bank3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bank3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
