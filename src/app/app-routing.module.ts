import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {ProjectComponent} from "./project/project.component";
import {DayExpensesComponent} from "./day-expenses/day-expenses.component";
import {MonthExpensesComponent} from "./month-expenses/month-expenses.component";

const routes: Routes = [
  {path :"persons", component : PersonComponent},
  {path :"projects", component : ProjectComponent},
  {path :"dayExpenses", component : DayExpensesComponent },
  {path :"monthExpenses", component : MonthExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
