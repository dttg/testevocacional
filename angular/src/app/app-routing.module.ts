import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashComponent } from './app-dash/app-dash.component';
import { AppTableComponent } from './app-table/app-table.component';
import { RiasecModule, RiasecComponent } from './questionario/riasec/riasec.module';
import { UserLoginModule, UserLoginComponent } from './user-login/user-login.module';

const routes: Routes = [
  { path: 'questoes', component: RiasecComponent },
  { path: '**', component: UserLoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RiasecModule,
    UserLoginModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
