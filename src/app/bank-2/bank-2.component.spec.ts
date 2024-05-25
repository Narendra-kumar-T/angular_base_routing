import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bank2Component } from './bank-2.component';

describe('Bank2Component', () => {
  let component: Bank2Component;
  let fixture: ComponentFixture<Bank2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bank2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bank2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
