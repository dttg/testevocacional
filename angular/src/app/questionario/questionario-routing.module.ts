import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestaoComponent } from './questao/questao.component';
import { CarreirasComponent } from './carreiras/carreiras.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionarioComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'questao/:id', component: QuestaoComponent },
      { path: 'carreiras', component: CarreirasComponent },
      { path: '', redirectTo: 'questao/1', pathMatch: 'full' }
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
