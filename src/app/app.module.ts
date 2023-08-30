import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchtableComponent } from './content/searchtable/searchtable.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddTableComponent } from './content/add-table/add-table.component';
import { EditTableComponent } from './content/edit-table/edit-table.component';
import { ViewTableComponent } from './content/view-table/view-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchtableComponent,
    NavbarComponent,
    HomeComponent,
    AddTableComponent,
    EditTableComponent,
    ViewTableComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
