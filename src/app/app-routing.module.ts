import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTableComponent } from './content/add-table/add-table.component';
import { EditTableComponent } from './content/edit-table/edit-table.component';
import { HomeComponent } from './content/home/home.component';
import { SearchtableComponent } from './content/searchtable/searchtable.component';
import { ViewTableComponent } from './content/view-table/view-table.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'searchTable',
    component: SearchtableComponent,
  },
  {
    path: 'addTable',
    component: AddTableComponent
  },
  {
    path: 'editTable',
    component: EditTableComponent
  },
  {
    path: 'viewTable',
    component: ViewTableComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
