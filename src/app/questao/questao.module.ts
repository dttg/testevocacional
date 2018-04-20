import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestaoComponent } from './questao.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuestaoComponent,
  ],
  exports: [
    QuestaoComponent,
  ],
})
export class QuestaoModule { }
