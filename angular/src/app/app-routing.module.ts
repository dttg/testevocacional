import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginModule, UserLoginComponent } from './user-login/user-login.module';

const routes: Routes = [
  {
    path: 'riasec',
    data: { preload: true },
    loadChildren: './questionario/questionario.module#QuestionarioModule'
  },
  { path: '', component: UserLoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true, // <-- debugging purposes only
  }), UserLoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
