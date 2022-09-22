import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonComponent } from './person/person.component';
import { ProjectComponent } from './project/project.component';
import { DayExpensesComponent } from './day-expenses/day-expenses.component';
import { MonthExpensesComponent } from './month-expenses/month-expenses.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonComponent,
    ProjectComponent,
    DayExpensesComponent,
    MonthExpensesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
