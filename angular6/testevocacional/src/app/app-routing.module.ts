import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppTableComponent } from './app-table/app-table.component';
import { RiasecModule, RiasecComponent } from './questionario/riasec/riasec.module';

const routes: Routes = [
  { path: 'questionario', component: RiasecComponent },
  { path: 'dash', component: AppDashComponent },
  { path: 'table', component: AppTableComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RiasecModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
