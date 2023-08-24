import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchtableComponent } from './searchtable/searchtable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddTableComponent } from './add-table/add-table.component';

const myRouter: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'searchTable',
    component: SearchtableComponent,
  },
  {
    path:'addTable',
    component:AddTableComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchtableComponent,
    NavbarComponent,
    HomeComponent,
    AddTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(myRouter),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
