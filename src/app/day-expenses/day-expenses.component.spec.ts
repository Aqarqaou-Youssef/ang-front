import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayExpensesComponent } from './day-expenses.component';

describe('DayExpensesComponent', () => {
  let component: DayExpensesComponent;
  let fixture: ComponentFixture<DayExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
