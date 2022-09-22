import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthExpensesComponent } from './month-expenses.component';

describe('MonthExpensesComponent', () => {
  let component: MonthExpensesComponent;
  let fixture: ComponentFixture<MonthExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
