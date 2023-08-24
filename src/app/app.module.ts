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

const myRouter: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'searchTable',
    component: SearchtableComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SearchtableComponent,
    NavbarComponent,
    HomeComponent,
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
