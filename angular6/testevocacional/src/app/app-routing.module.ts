import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';

const routes: Routes = [
  { path: 'dash', component: AppDashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
