import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatRadioModule, MatGridListModule, MatIconModule, MatButtonModule } from '@angular/material';

import { QuestaoComponent } from './questao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatCardModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    QuestaoComponent,
  ],
  exports: [
    QuestaoComponent,
  ],
})
export class QuestaoModule { }
