import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionarioRoutingModule } from './questionario-routing.module';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestaoComponent } from './questao/questao.component';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RiasecService } from './riasec/riasec.service';

@NgModule({
  imports: [
    CommonModule,
    QuestionarioRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [QuestionarioComponent, QuestaoComponent],
  exports: [QuestionarioComponent, QuestaoComponent],
  providers: [RiasecService],
})
export class QuestionarioModule {}

// export { QuestionarioComponent } from './questionario/questionario.component';
