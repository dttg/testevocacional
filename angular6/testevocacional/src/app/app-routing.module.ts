import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppTableComponent } from './app-table/app-table.component';

const routes: Routes = [
  { path: 'dash', component: AppDashComponent },
  { path: 'table', component: AppTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
