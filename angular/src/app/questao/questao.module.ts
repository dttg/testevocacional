import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatRadioModule, MatGridListModule, MatIconModule } from '@angular/material';

import { QuestaoComponent } from './questao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatGridListModule,
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
