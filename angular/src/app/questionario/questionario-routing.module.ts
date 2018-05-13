import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestaoComponent } from './questao/questao.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionarioComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'questao/:id', component: QuestaoComponent },
      { path: '', redirectTo: 'questao/0', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class QuestionarioRoutingModule { }
